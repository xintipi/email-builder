'use client'

import { Layout, Spin } from 'antd'
import clsx from 'clsx'

import { useSpin } from '@/stores/spin.store'

const OverlaySpinner = () => {
  const { spinning } = useSpin()

  if (!spinning) return <></>

  return (
    <Layout className="h-screen">
      <Spin size="large" className="flex h-full items-center justify-center" />
    </Layout>
  )
}

export default OverlaySpinner
