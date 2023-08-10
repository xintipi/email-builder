'use client'

import { Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import CreateTemplate from '@/components/partials/create-template'
import { useGlobalStore } from '@/stores/global.store'

export default function TemplateContent({ templates, translation, hasCreate = true }) {
  const { setSelectedTemplate } = useGlobalStore()

  const pathName = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const onSeeDetails = (template) => {
    setSelectedTemplate(template)
  }

  const handleBoxHover = (index) => {
    setHoveredIndex(index)
  }

  const handleBoxLeave = () => {
    setHoveredIndex(-1)
  }

  const renderOptions = (data) => {
    return (
      <Row gutter={[8, 8]}>
        {data.length &&
          data.map((template, index) => (
            <Col key={index} xxl={12} xl={12} md={12}>
              <div className="box-template" onMouseEnter={() => handleBoxHover(index)}>
                <Image
                  src={template.template_html}
                  alt={template.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div
                className={`hover-box-template ${hoveredIndex === index ? 'block' : 'hidden'}`}
                onMouseLeave={handleBoxLeave}>
                <div className="flex h-full flex-1 flex-col items-center justify-center self-center">
                  <span className="mb-5 text-center text-lg font-semibold capitalize leading-[30px]">
                    {template.title}
                  </span>
                  <Link
                    className="inline-block cursor-pointer rounded border border-solid border-transparent bg-[rgb(0,123,255)] px-3 py-[7px] text-center align-middle text-base font-normal leading-normal text-white no-underline"
                    href={`${pathName}/edit/${template.id}`}
                    onClick={() => onSeeDetails(template)}>
                    {translation.start_editing}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    )
  }

  return (
    <Row className="h-[calc(100%_-_37px)] overflow-y-auto overflow-x-hidden py-[8px]">
      {hasCreate ? (
        <>
          <Col xxl={20} xl={19} md={18} className="pr-[8px]">
            {renderOptions(templates)}
          </Col>
          <Col xxl={4} xl={5} md={6}>
            <CreateTemplate translation={translation} />
          </Col>
        </>
      ) : (
        <Col xxl={24} xl={24} md={24}>
          {renderOptions(templates)}
        </Col>
      )}
    </Row>
  )
}
