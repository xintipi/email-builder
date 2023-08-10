import { useTranslation } from '@/app/i18n'

export async function generateMetadata({ params }) {
  const { t } = await useTranslation(params.lng, 'customize-template')

  return {
    title: t('title'),
  }
}

export default async function Layout({ children }) {
  return <>{children}</>
}
