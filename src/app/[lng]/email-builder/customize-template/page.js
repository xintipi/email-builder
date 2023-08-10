import ColComponent from '../col.component'

import EventForm from '@/components/ui/customize-template/form'

export default async function CustomizeTemplatePage({ params: { lng } }) {
  return (
    <ColComponent>
      <div className="email-builder-content">
        <EventForm lng={lng} />
      </div>
    </ColComponent>
  )
}
