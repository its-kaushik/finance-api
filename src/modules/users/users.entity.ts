import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import BaseEntity from '../../common/base.entity';
import { USER_ROLES } from './users.constants';
import Owner from '../owners/owners.entity';
import { Allow, IsEmail, IsEnum, IsOptional } from 'class-validator';

@Entity()
export default class User extends BaseEntity {
  @Column({ unique: true, type: 'varchar' })
  @IsEmail()
  email!: string;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.CUSTOMER,
  })
  @IsEnum(USER_ROLES)
  @IsOptional()
  role: USER_ROLES = USER_ROLES.CUSTOMER;

  @OneToOne(() => Owner, (owner) => owner.user, {
    nullable: true,
  })
  @JoinColumn()
  @Allow()
  @IsOptional()
  owner: Owner | undefined;
}
