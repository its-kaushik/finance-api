import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { BasicDetails } from '../../common/base.entity';
import User from '../users/users.entity';
import { Allow } from 'class-validator';

@Entity()
export default class Owner extends BasicDetails {
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  @Allow()
  user!: User;
}
