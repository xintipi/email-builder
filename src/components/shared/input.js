import { Form as AntdForm, Input as AntdInput } from 'antd'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { Controller } from 'react-hook-form'

const InputWrapper = ({
  validateStatus,
  help,
  type,
  name,
  control,
  label,
  required,
  labelCol,
  wrapperCol,
  rootClassName,
  ...props
}) => {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <AntdForm.Item
            label={label}
            required={required}
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            help={help}
            validateStatus={validateStatus}
            className="customize-ant-form-item">
            {type === 'password' ? (
              <AntdInput.Password {...field} {...props} className="customize-ant-input" />
            ) : (
              <AntdInput {...field} {...props} className="customize-ant-input" />
            )}
          </AntdForm.Item>
        )}
      />
    )
  }

  return (
    <AntdForm.Item
      label={label}
      required={required}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      help={help}
      validateStatus={validateStatus}
      className="customize-ant-form-item">
      {type === 'password' ? (
        <AntdInput.Password name={name} {...props} className="customize-ant-input" />
      ) : (
        <AntdInput name={name} {...props} className="customize-ant-input" />
      )}
    </AntdForm.Item>
  )
}

const Input = memo(InputWrapper)

Input.propTypes = {
  validateStatus: PropTypes.string,
  help: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  control: PropTypes.object,
}

export default Input
