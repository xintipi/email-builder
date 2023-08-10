'use client'

import { Select as AntdSelect } from 'antd'
import { memo } from 'react'

const Select = (props) => {
  const { value, items } = props

  const renderOptions = () => {
    return items.map((option) => (
      <AntdSelect.Option key={option.value} value={option.value}>
        {option.label}
      </AntdSelect.Option>
    ))
  }

  const isValueInItems = (value) => {
    return items.some((option) => option.value === value)
  }

  return (
    <AntdSelect
      {...props}
      value={isValueInItems(value) ? value : undefined}
      bordered={false}
      className="customize-ant-select">
      {items && renderOptions()}
    </AntdSelect>
  )
}

export default memo(Select)
