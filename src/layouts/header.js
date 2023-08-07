'use client'

import { Layout } from 'antd'
import clsx from 'clsx'

export default function Header({ children, className }) {
  return (
    <Layout.Header
      className={clsx(
        'relative z-10 flex h-[64px] items-center justify-between bg-white p-0',
        className
      )}>
      {children}
    </Layout.Header>
  )
}
