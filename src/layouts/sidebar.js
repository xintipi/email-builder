'use client'

import { Layout, Tooltip } from 'antd'
import Image from 'next/image'

import { useTranslation } from '@/app/i18n/client'
import { capitalizeFirstLetter } from '@/lib/utils'
import { OPERATIONS } from '@/mock/operations'

export default function Sidebar({ lng }) {
  const { t } = useTranslation(lng, 'sidebar')
  return (
    <Layout.Sider className="sider-cls bg-white" width={75}>
      <div className="sider-cls-heading">
        <div className="bg-100% relative h-[50px] w-[50px] bg-circle-user bg-no-repeat">
          <p className="absolute-center text-xl font-semibold text-persian-indigo">V</p>
          <Image
            className="absolute bottom-[-5px] right-[-5px]"
            src="/images/icons/logo.svg"
            alt="Logo"
            width={23}
            height={23}
          />
        </div>
      </div>

      <div className="h-[calc(100%_-_118px)]">
        <div className="flex h-full flex-col justify-between pb-[31px] pt-[16px]">
          <ul className="flex list-none flex-col gap-[25px]">
            {OPERATIONS.map((operation) => (
              <Tooltip
                key={operation.id}
                placement="right"
                title={capitalizeFirstLetter(t(operation.name))}>
                <li className="cursor-pointer">
                  <Image src={operation.src} alt={t(operation.name)} width={25} height={25} />
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
      </div>

      <div className="cloud-icon border-b-0 border-l-0 border-r-0 border-t-[1px] border-solid border-gray-light">
        <Image src="/images/icons/cloud-icon.png" alt="Cloud" width={50} height={50} />
      </div>
    </Layout.Sider>
  )
}
