import { EMAIL_VALID, REQUIRED_FIELD, REQUIRED_LENGTH } from './errors';
import {
  emailValidator,
  isRequiredValidator,
  lengthValidator,
} from './validators';

export const formSchema = {
  email: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
    if (emailValidator(value)) {
      return EMAIL_VALID;
    }
  },
  password: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
    if (lengthValidator(value)) {
      return REQUIRED_LENGTH;
    }
  },
  nationality: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
  },
};
