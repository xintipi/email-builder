import { useTranslation } from '@/app/i18n'

export async function generateMetadata({ params }) {
  const { t } = await useTranslation(params.lng, 'lp-builder')

  return {
    title: t('title'),
  }
}

export default function Layout({ children }) {
  return <section className="lp-builder relative h-screen">{children}</section>
}
