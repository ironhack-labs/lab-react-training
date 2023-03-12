const MAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const isRequiredValidator = (value) => {
  return !value
}

export const lengthValidator = (value, num = 50) => {
  return value.length < num;
}

export const urlValidator = (value) => {
  return !MAIL_REGEX.test(value)
}