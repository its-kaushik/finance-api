import { Column, Entity } from 'typeorm';
import BaseEntity from '../../common/base.entity';
import { USER_ROLES } from './users.constants';

@Entity()
export default class User extends BaseEntity {
  @Column({ unique: true })
  email!: string;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.CUSTOMER,
  })
  role!: USER_ROLES;
}
