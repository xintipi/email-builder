'use client'

import { Layout } from 'antd'
import { useSelectedLayoutSegment } from 'next/navigation'

import MenuNav from '@/layouts/menu-nav'
import Sidebar from '@/layouts/sidebar'

export default function MainLayout({ children, lng }) {
  const segment = useSelectedLayoutSegment()
  return (
    <>
      <Layout className="h-screen w-full min-w-[1280px] bg-white " hasSider>
        <Sidebar lng={lng} />

        <MenuNav lng={lng} segment={segment} />

        <div className="flex h-screen w-full flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden">
          <Layout.Content>{children}</Layout.Content>
        </div>
      </Layout>
    </>
  )
}
