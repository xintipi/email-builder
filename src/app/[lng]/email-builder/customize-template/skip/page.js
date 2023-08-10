import ColComponent from '../../col.component'

import { useTranslation } from '@/app/i18n'
import TemplateContent from '@/components/partials/template-content'
import TemplateHeader from '@/components/partials/template-header'
import samples from '@/mock/sample-templates.json'

async function getTemplates() {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return samples
}

export default async function SkipPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, ['skip'])
  const result = await getTemplates()
  return (
    <ColComponent>
      <div className="email-builder-content">
        <TemplateHeader
          translation={{
            select_template: t('select_template'),
            go_back: t('go_back'),
          }}
        />

        <TemplateContent
          templates={result}
          translation={{
            new_template: t('new_template'),
            start_editing: t('start_editing'),
          }}
        />
      </div>
    </ColComponent>
  )
}
