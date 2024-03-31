import { IsDateString, IsOptional, IsString, Matches } from 'class-validator';
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
  @IsString()
  firstName!: string;

  @Column()
  @IsString()
  lastName!: string;

  @Column()
  @Matches(/^\+[1-9]\d{0,2}$/)
  countryCode!: string;

  @Column()
  @Matches(/^\d{10}$/)
  phoneNumber!: string;

  @Column({ nullable: true, type: 'varchar' })
  @IsString()
  @IsOptional()
  profilePictureUrl: string | undefined;

  @Column()
  @IsDateString()
  dateOfBirth!: Date;
}
