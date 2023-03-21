const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const isRequiredValidator = (value) => {
  return !value;
};

export const lengthValidator = (value, num = 8) => {
  return value.length < num;
};

export const emailValidator = (value) => {
  return !EMAIL_REGEX.test(value);
};
