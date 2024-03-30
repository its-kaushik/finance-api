import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export default class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number = 0;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date = new Date();

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | undefined;

  @VersionColumn({ type: 'number' })
  version!: number;
}

/* export class BasicDetails extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  countryCode: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column()
  dateOfBirth: Date;
}
 */
