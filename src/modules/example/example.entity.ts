import { Column, Entity } from 'typeorm';
import BaseEntity from '../../common/base.entity';
//import BaseEntity from '../../common/base.entity';

@Entity()
export default class Example extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  school?: string;
}
