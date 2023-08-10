'use client'

import { Layout, Spin } from 'antd'
import { useSelectedLayoutSegment } from 'next/navigation'

import MenuNav from '@/layouts/menu-nav'
import Sidebar from '@/layouts/sidebar'
import { useSpin } from '@/stores/spin.store'

export default function MainLayout({ children, lng }) {
  const segment = useSelectedLayoutSegment()
  const { spinning } = useSpin()
  return (
    <>
      <Layout className="h-screen w-full min-w-[1280px] bg-white" hasSider>
        {spinning ? (
          <Spin size="large" className="flex h-full w-full items-center justify-center" />
        ) : (
          <>
            <Sidebar lng={lng} />

            <MenuNav lng={lng} segment={segment} />

            <div className="flex h-screen w-full flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden">
              <Layout.Content>{children}</Layout.Content>
            </div>
          </>
        )}
      </Layout>
    </>
  )
}
