'use client'

import { Space } from 'antd'
import { useSelectedLayoutSegment } from 'next/navigation'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { useTranslation } from '@/app/i18n/client'
import MenuBarHero from '@/components/partials/menu-bar-hero'
import Select from '@/components/shared/select'
import { ADMIN_TOOLS } from '@/mock/admin-tools'
import { AVAILABLE_TOOLS } from '@/mock/available-tools'

const MenuBar = ({ lng }) => {
  const { t } = useTranslation(lng, 'menu-bar')
  const segment = useSelectedLayoutSegment()
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div className="sl-connector">
        <p className="mb-4 text-[15px] font-semibold">{t('sl_connectors')}:</p>
        <Select
          defaultValue="Splash That"
          items={[
            { value: 'Splash That', label: 'Splash That' },
            { value: 'Splash That 1', label: 'Splash That 1' },
            { value: 'Splash That 2', label: 'Splash That 2' },
          ]}
        />
      </div>

      <div className="sl-available-tools">
        <p className="mb-4 text-[15px] font-semibold">{t('available_tools.text')}:</p>
        <MenuBarHero options={AVAILABLE_TOOLS} lng={lng} segment={segment} />
      </div>

      <div className="sl-admin-tools">
        <p className="mb-4 text-[15px] font-semibold">{t('admin_tools.text')}:</p>
        <MenuBarHero options={ADMIN_TOOLS} lng={lng} segment={segment} />
      </div>
    </Space>
  )
}

MenuBar.propTypes = {
  lng: PropTypes.string.isRequired,
}

export default memo(MenuBar)
