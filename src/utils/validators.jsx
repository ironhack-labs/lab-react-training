const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export const isRequiredValidator = (value) => {
    return !value
}

export const passwordValidator = (value) => {
    return !PASSWORD_REGEX.test(value)
}