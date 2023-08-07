'use client'

import { Select as AntdSelect } from 'antd'
import { memo } from 'react'

const Select = ({ items, ...props }) => {
  const renderOptions = () => {
    return items.map((option) => (
      <AntdSelect.Option key={option.value} value={option.value}>
        {option.label}
      </AntdSelect.Option>
    ))
  }

  return (
    <AntdSelect {...props} bordered={false} className="customize-ant-select">
      {items && renderOptions()}
    </AntdSelect>
  )
}

export default memo(Select)
