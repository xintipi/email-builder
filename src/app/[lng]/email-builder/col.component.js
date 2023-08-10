import { Col } from 'antd'

export default function ColComponent({ children }) {
  return (
    <Col xxl={20} xl={24} md={24} className="relative">
      {children}
    </Col>
  )
}
