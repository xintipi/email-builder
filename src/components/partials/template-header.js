'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

import Button from '@/components/shared/button'
import { usePreviousPath } from '@/hooks/use-previous-path'

export default function TemplateHeader({ className, translation }) {
  const router = useRouter()
  const pathName = usePathname()
  const previousPath = usePreviousPath(pathName)

  return (
    <div className={clsx(className, 'mb-2 flex justify-between')}>
      <p className="font-semibold">{translation.select_template}:</p>
      <Button type="purple" onClick={() => router.push(previousPath)}>
        {translation.go_back}
      </Button>
    </div>
  )
}
