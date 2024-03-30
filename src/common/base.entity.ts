import { IsDate, IsPhoneNumber, Matches } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
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

@Entity()
export class BasicDetails extends BaseEntity {
  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  @Matches(/^\+[1-9]\d{0,2}$/)
  countryCode!: string;

  @Column()
  @IsPhoneNumber()
  phoneNumber!: string;

  @Column({ nullable: true, type: 'varchar' })
  profilePictureUrl: string | undefined;

  @Column()
  @IsDate()
  dateOfBirth!: Date;
}
