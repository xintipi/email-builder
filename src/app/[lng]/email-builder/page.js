import ColComponent from './col.component'

import { useTranslation } from '@/app/i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'email-builder')
  return (
    <ColComponent>
      <div className="email-builder-content">
        <p className="flex-center h-full text-[35px] text-[#B0B0B0]">{t('select_action')}</p>
      </div>
    </ColComponent>
  )
}
