import { Col, Row } from 'antd'

import { useTranslation } from '@/app/i18n'
import MenuBar from '@/components/partials/menu-bar'

export async function generateMetadata({ params }) {
  const { t } = await useTranslation(params.lng, 'email-builder')

  return {
    title: t('title'),
  }
}

export default async function Layout({ children, params: { lng } }) {
  // const headersList = headers()
  // const domain = headersList.get('x-forwarded-host') || ''
  // const protocol = headersList.get('x-forwarded-proto') || ''
  // const invokePath = headersList.get('x-invoke-path') || ''
  return (
    <section className="p-[20px]">
      <Row className="h-full">
        <Col xxl={4} xl={24} md={24} className="email-builder-menu pr-[20px]">
          <MenuBar lng={lng} />
        </Col>
        {children}
      </Row>
    </section>
  )
}
