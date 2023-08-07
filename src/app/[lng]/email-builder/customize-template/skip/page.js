import { Col } from 'antd'
import { headers } from 'next/headers'

import ModalEmailEditor from '@/components/partials/modal-email-editor'

export default async function Page({ params: { lng } }) {
  const headersList = headers()
  const domain = headersList.get('x-forwarded-host') || ''
  const protocol = headersList.get('x-forwarded-proto') || ''
  return (
    <Col flex={4} className="relative">
      <div className="email-builder-content">
        <ModalEmailEditor protocol={protocol} domain={domain} />
        Skip lists
      </div>
    </Col>
  )
}
