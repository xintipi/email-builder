'use client'

import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import dayjs from 'dayjs'
import { Inter } from 'next/font/google'
import { useState } from 'react'

import { fallbackLng } from '@/app/i18n/settings'

const inter = Inter({ subsets: ['latin'] })

dayjs.locale(fallbackLng)

export const AntConfigProvider = ({ children }) => {
  const [locale] = useState(enUS)
  return (
    <ConfigProvider
      locale={locale}
      theme={{ token: { fontFamily: inter.style.fontFamily, fontSize: 15 } }}>
      {children}
    </ConfigProvider>
  )
}
