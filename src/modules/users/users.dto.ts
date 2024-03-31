import { USER_ROLES } from './users.constants';

export interface CreateUserDTO {
  email: string;
  role?: USER_ROLES;
}
