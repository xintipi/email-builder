import '@/styles/style.scss'

import clsx from 'clsx'
import { dir } from 'i18next'
import { Inter } from 'next/font/google'

import { languages } from '@/app/i18n/settings'
import EmailEditor from '@/components/partials/email-editor'
import ProgressBar from '@/components/partials/progress-bar'
import MainLayout from '@/layouts/main-layout'
import { AntConfigProvider } from '@/providers/ant-config.provider'
import { NextAuthProvider } from '@/providers/next-auth.provider'
import { StyleRegistryProvider } from '@/providers/style-registry.provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={clsx(inter.className, 'overflow-x-auto xl:overflow-x-hidden')}
        suppressHydrationWarning>
        <ProgressBar />

        <NextAuthProvider>
          <StyleRegistryProvider>
            <AntConfigProvider>
              <MainLayout lng={lng}>{children}</MainLayout>
            </AntConfigProvider>
          </StyleRegistryProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
