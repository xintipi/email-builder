import { Col } from 'antd'

import EventForm from '@/components/ui/customize-template/form'

export default async function Page({ params: { lng } }) {
  return (
    <Col flex={4} className="relative">
      <div className="email-builder-content">
        <EventForm lng={lng} />
      </div>
    </Col>
  )
}
