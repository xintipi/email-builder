'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CreateTemplate({ translation }) {
  const pathName = usePathname()

  return (
    <div className="box-template">
      <div className="flex h-[340px] flex-col justify-between pt-20">
        <div className="flex flex-col items-center">
          <Image
            src="/images/icons/plus-icon.svg"
            className="mb-[26px]"
            alt="Plus Icon"
            width={40}
            height={40}
          />
          <Link
            className="border-transparent; inline-block cursor-pointer rounded border border-solid bg-[rgb(0,123,255)] px-3 py-[7px] text-center align-middle text-base font-normal leading-normal text-white no-underline"
            href={`${pathName}/new`}>
            {' '}
            {translation.new_template}
          </Link>
        </div>
        <Image src="/images/new-template.svg" alt="New Template" width={279} height={95} />
      </div>
    </div>
  )
}
