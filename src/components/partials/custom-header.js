import { SearchOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { memo } from 'react'

import Input from '@/components/shared/input'
import Header from '@/layouts/header'

const CustomHeader = ({ title, placeholder, children }) => {
  return (
    <Header>
      <p className="text-[25px] text-black">{title}</p>
      <div className="search-materials flex flex-col items-center sm:flex-row">
        {children}
        <Input
          placeholder={placeholder}
          prefix={<SearchOutlined className="blur-prefix-cls pr-[5px] text-[20px]" />}
          className="mt-2 h-[40px] min-w-[341px] px-[20px] sm:ml-2 sm:mt-0"
        />
      </div>
    </Header>
  )
}

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default memo(CustomHeader)
