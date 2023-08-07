import { useTranslation } from '@/app/i18n'

export async function generateMetadata({ params }) {
  const { t } = await useTranslation(params.lng, 'event-portal')

  return {
    title: t('title'),
  }
}

export default function Layout({ children }) {
  return <>{children}</>
}
