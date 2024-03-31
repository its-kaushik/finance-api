import User from '../users/users.entity';

export interface CreateOwnerDTO {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  profilePictureUrl?: string | undefined;
  dateOfBirth: Date;
  user: User;
  testProp: number;
}
