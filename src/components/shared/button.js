'use client'

import { Button as AntdButton } from 'antd'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

const Button = (props) => {
  const { type, htmlType, onClick, children, disabled, loading, icon, className } = props

  return (
    <AntdButton
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      icon={icon}
      rootClassName={clsx('customize-ant-button', className, {
        'bg-purple-light hover:bg-purple-darker': type === 'purple',
        'bg-red-500 hover:bg-red-600': type === 'danger',
        'bg-cloud-burst hover:bg-cloud-burst-darker': type === 'cloud-burst',
        'hover:text-black': type === 'default',
      })}>
      <span
        className={clsx({
          'text-white':
            type === 'purple' || type === 'danger' || type === 'cloud-burst' || type === 'primary',
        })}>
        {children}
      </span>
    </AntdButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'purple', 'danger', 'cloud-burst']),
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
}

export default memo(Button)
