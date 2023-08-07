import { redirect } from 'next/navigation'

export default function RootPage({ params: { lng } }) {
  redirect(`/${lng}/lp-builder`)
  return null
}
