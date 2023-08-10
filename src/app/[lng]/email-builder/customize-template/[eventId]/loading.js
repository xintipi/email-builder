import { Card, Row, Col } from 'antd'

import ColComponent from '@/app/[lng]/email-builder/col.component'

export default function Loading() {
  return (
    <ColComponent>
      <div className="email-builder-content">
        <div className="mb-2 flex animate-pulse justify-between">
          <div className="h-4 w-32 rounded-full bg-gray-100 dark:bg-gray-200"></div>
          <div className="h-8 w-20 rounded bg-gray-100 dark:bg-gray-200"></div>
        </div>

        <Row className="h-[calc(100%_-_37px)] overflow-y-auto overflow-x-hidden py-[8px]">
          <Col xxl={24} xl={24} md={24}>
            <Row gutter={[8, 8]}>
              <Col xxl={12} xl={12} md={12}>
                <div className="box-template pointer-events-none animate-pulse">
                  <div className="flex h-[500px] w-full items-center justify-center bg-gray-100 dark:bg-gray-200">
                    <svg
                      className="h-10 w-full text-gray-100 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              </Col>
              <Col xxl={12} xl={12} md={12}>
                <div className="box-template pointer-events-none animate-pulse">
                  <div className="flex h-[500px] w-full items-center justify-center bg-gray-100 dark:bg-gray-200">
                    <svg
                      className="h-10 w-full text-gray-100 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              </Col>
              <Col xxl={12} xl={12} md={12}>
                <div className="box-template pointer-events-none animate-pulse">
                  <div className="flex h-[500px] w-full items-center justify-center bg-gray-100 dark:bg-gray-200">
                    <svg
                      className="h-10 w-full text-gray-100 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </ColComponent>
  )
}
