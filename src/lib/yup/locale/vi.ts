export interface MessageParams {
  path: string
  value: any
  originalValue: any
  label: string
  type: string
}

const labelText = (prm: { label: string }) => {
  return prm.label ? `${prm.label}` : ''
}

export const viLocale = {
  mixed: {
    default: (prm: MessageParams) => `${labelText(prm)} không có giá trị`,
    required: (prm: MessageParams) => `${labelText(prm)} là bắt buộc`,
    oneOf: (prm: MessageParams & { values: any }) =>
      `${labelText(prm)} phải là một trong các giá trị sau: ${prm.values}`,
    notOneOf: (prm: MessageParams & { values: any }) =>
      `${labelText(prm)} không được là một trong các giá trị sau: ${prm.values}`,
    notType: (prm: MessageParams) => {
      if (prm.type === 'number') {
        return `${labelText(prm)} cần nhập một số`
      }
      if (prm.type === 'date') {
        return `${labelText(prm)} cần nhập ngày`
      }
      return `${labelText(prm)} cần nhập định dạng hợp lệ`
    },
    defined: `defined`,
  },
  string: {
    length: (prm: MessageParams & { length: number }) =>
      `${labelText(prm)} phải chính xác là ${prm.length} ký tự`,
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)} phải chứa ít nhất ${prm.min} ký tự`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)} không thể có nhiều hơn ${prm.max} ký tự`,
    matches: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)} phải chứa các kí tự sau: "${prm.regex}"`,
    email: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)} phải là một địa chỉ email hợp lệ`,
    url: (prm: MessageParams) => `${labelText(prm)} phải là một URL hợp lệ`,
    uuid: (prm: MessageParams) => `${labelText(prm)} phải là một UUID hợp lệ`,
    trim: (prm: MessageParams) => `${labelText(prm)} phải là một chuỗi đã cắt`,
    lowercase: (prm: MessageParams) => `${labelText(prm)} phải là một chuỗi chữ thường`,
    uppercase: (prm: MessageParams) => `${labelText(prm)} phải là một chuỗi chữ hoa`,
  },
  number: {
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)} phải lớn hơn hoặc bằng ${prm.min}`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)} phải nhỏ hơn hoặc bằng ${prm.max}`,
    lessThan: (prm: MessageParams & { less: number }) =>
      `${labelText(prm)} phải nhỏ hơn ${prm.less}`,
    moreThan: (prm: MessageParams & { more: number }) =>
      `${labelText(prm)} phải lớn hơn ${prm.more}`,
    positive: (prm: MessageParams & { more: number }) => `${labelText(prm)} phải là một số dương`,
    negative: (prm: MessageParams & { less: number }) => `${labelText(prm)} phải là một số âm`,
    integer: (prm: MessageParams) => `${labelText(prm)} phải là số nguyên`,
  },
  date: {
    min: (prm: MessageParams & { min: Date | string }) =>
      `${labelText(prm)} phải muộn hơn ${prm.min}`,
    max: (prm: MessageParams & { max: Date | string }) =>
      `${labelText(prm)} phải sớm hơn ${prm.max}`,
  },
  boolean: {
    isValue: (prm: MessageParams) => `Giá trị của ${labelText(prm)} là bắt buộc`,
  },
  object: {
    noUnknown: (prm: MessageParams) =>
      `${labelText(prm)} không thể có các khóa không được chỉ định trong hình dạng đối tượng`,
  },
  array: {
    length: (prm: MessageParams & { length: number }) =>
      `${labelText(prm)} phải có đội dài là ${prm.length} phần tử`,
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)} phải có ít nhất ${prm.min} phần tử`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)} phải có ít hơn hoặc bằng ${prm.max} phần tử`,
  },
}
