import * as yup from 'yup'

yup.addMethod(yup.string, 'regexPassword', function (message) {
  return this.test('regexPassword', message, function (value) {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(value)
  })
})

yup.addMethod(yup.string, 'regexPhoneVn', function (message) {
  return this.test('regexPhoneVn', message, function (value) {
    return value ? /^(0|\+84)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-46-9])(\d{7})$/.test(value) : true
  })
})

export default yup
