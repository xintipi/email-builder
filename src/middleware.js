import acceptLanguage from 'accept-language'
import { NextResponse } from 'next/server'

import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

const cookieName = 'i18next'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req) {
  const pathName = req.nextUrl.pathname
  let lng

  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Your other files in `public` folder
  if (pathName.startsWith('/_next') || pathName.includes('/api/') || PUBLIC_FILE.test(pathName)) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${lng}${pathName.startsWith('/') ? '' : '/'}${pathName}`, req.url)
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }
}
