import { Col } from 'antd'

import { useTranslation } from '@/app/i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'email-builder')
  return (
    <Col flex={4} className="relative">
      <div className="email-builder-content">
        <p className="flex-center absolute-center text-center text-[35px] text-[#B0B0B0]">
          {t('sl_action')}
        </p>
      </div>
    </Col>
  )
}
