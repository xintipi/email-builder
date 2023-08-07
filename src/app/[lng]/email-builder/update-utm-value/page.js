import { Col } from 'antd'

export default async function Page({ params: { lng } }) {
  return (
    <Col flex={4} className="relative">
      <div className="email-builder-content">Update UTM value</div>
    </Col>
  )
}
