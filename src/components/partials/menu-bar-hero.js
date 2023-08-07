'use client'

import { Card } from 'antd'
import clsx from 'clsx'
import Link from 'next/link'

import { useTranslation } from '@/app/i18n/client'

export default function MenuBarHero({ options, lng, segment, active }) {
  const { t } = useTranslation(lng, 'menu-bar')

  return (
    <Card bordered={false} className="customize-ant-card">
      <ul className="flex list-none flex-col gap-[19px]">
        {options.map((option) => (
          <li
            key={option.id}
            className={clsx(
              'w-fit cursor-pointer text-inherit transition-colors duration-300 hover:text-persian-indigo hover:underline',
              {
                'font-semibold text-persian-indigo underline': segment === option.route_name,
              }
            )}>
            <Link href={option.link} className="text-inherit">
              {t(option.name)}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
