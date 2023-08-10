'use client'

import { Space } from 'antd'
import clsx from 'clsx'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'

import { useTranslation } from '@/app/i18n/client'
import MenuBarHero from '@/components/partials/menu-bar-hero'
import Select from '@/components/shared/select'
import { useResize } from '@/hooks/use-resize'
import { ADMIN_TOOLS } from '@/mock/admin-tools'
import { AVAILABLE_TOOLS } from '@/mock/available-tools'

const MenuBar = ({ lng }) => {
  const { t } = useTranslation(lng, 'menu-bar')
  const segment = useSelectedLayoutSegment()

  const router = useRouter()

  const [connector, setConnector] = useState(1)
  const [toolsVariant, setToolsVariant] = useState(segment)
  const [adminVariant, setAdminVariant] = useState(segment)

  const windowSize = useResize()

  const { width } = windowSize

  const availableTools = useMemo(() => {
    return AVAILABLE_TOOLS.map((tool) => ({
      value: tool.route_name,
      label: t(tool.name),
    }))
  }, [AVAILABLE_TOOLS])

  const adminTools = useMemo(() => {
    return ADMIN_TOOLS.map((tool) => ({
      value: tool.route_name,
      label: t(tool.name),
    }))
  }, [ADMIN_TOOLS])

  const onChoseToolVariant = (tool) => {
    console.log(tool)
    setToolsVariant(tool)
    router.push(`/${lng}/email-builder/${tool}`)
  }

  const onChoseAdminVariant = (tool) => {
    setAdminVariant(tool)
    router.push(`/${lng}/email-builder/${tool}`)
  }

  return (
    <Space
      direction={width < 1600 ? 'horizontal' : 'vertical'}
      size="middle"
      className={clsx('flex', {
        'flex-start': width < 1600,
        'mb-[20px]': width < 1600,
      })}>
      <Space direction="vertical" size="small">
        <p className="text-[15px] font-semibold">{t('sl_connectors')}:</p>
        <Select
          value={connector}
          items={[
            { value: 1, label: 'Splash That' },
            { value: 2, label: 'Splash That 1' },
            { value: 3, label: 'Splash That 2' },
          ]}
          onChange={(e) => setConnector(e)}
        />
      </Space>

      <Space direction="vertical" size="small">
        <p className="text-[15px] font-semibold">{t('available_tools.text')}:</p>
        {width < 1600 ? (
          <Select
            style={{ width: '200px' }}
            value={toolsVariant}
            items={availableTools}
            onChange={onChoseToolVariant}
            placeholder={t('available_tools.placeholder')}
          />
        ) : (
          <MenuBarHero options={AVAILABLE_TOOLS} lng={lng} segment={segment} />
        )}
      </Space>

      <Space direction="vertical" size="small">
        <p className="text-[15px] font-semibold">{t('admin_tools.text')}:</p>
        {width < 1600 ? (
          <Select
            style={{ width: '200px' }}
            value={adminVariant}
            items={adminTools}
            onChange={onChoseAdminVariant}
            placeholder={t('admin_tools.placeholder')}
          />
        ) : (
          <MenuBarHero options={ADMIN_TOOLS} lng={lng} segment={segment} />
        )}
      </Space>
    </Space>
  )
}

MenuBar.propTypes = {
  lng: PropTypes.string.isRequired,
}

export default MenuBar
