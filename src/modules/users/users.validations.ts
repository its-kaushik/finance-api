import {
  createValidation,
  emailRequired,
  enumValidationRequired,
} from '../../validations';
import { USER_ROLES } from './users.constants';

export const createUserValidation = createValidation({
  email: emailRequired,
  role: enumValidationRequired([USER_ROLES.ADMIN]),
});
