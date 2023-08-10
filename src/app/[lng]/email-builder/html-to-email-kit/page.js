import ColComponent from '../col.component'

export default async function HtmlToEmailKitPage({ params: { lng } }) {
  return (
    <ColComponent>
      <div className="email-builder-content">HTML to email kit</div>
    </ColComponent>
  )
}
