import { Col } from 'antd'

export default async function Page({ params: { lng } }) {
  return (
    <Col flex={4} className="relative">
      <div className="email-builder-content">HTML to email kit</div>
    </Col>
  )
}
