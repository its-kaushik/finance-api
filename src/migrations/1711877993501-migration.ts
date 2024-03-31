import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1711877993501 implements MigrationInterface {
  name = 'Migration1711877993501';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "basic_details" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "countryCode" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "profilePictureUrl" character varying, "dateOfBirth" TIMESTAMP NOT NULL, CONSTRAINT "PK_15268a0477a36603ae8352c3fb7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "owner" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "countryCode" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "profilePictureUrl" character varying, "dateOfBirth" TIMESTAMP NOT NULL, "testProp" integer, "userId" integer, CONSTRAINT "REL_e59dfb8a17a2fd953467e9a92f" UNIQUE ("userId"), CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('0', '1', '2', '3')`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "email" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT '3', "ownerId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_6c19ad3671f901796d5a7395e3" UNIQUE ("ownerId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "example" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "name" character varying NOT NULL, "school" character varying, CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "owner" ADD CONSTRAINT "FK_e59dfb8a17a2fd953467e9a92f9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_6c19ad3671f901796d5a7395e3e" FOREIGN KEY ("ownerId") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_6c19ad3671f901796d5a7395e3e"`
    );
    await queryRunner.query(
      `ALTER TABLE "owner" DROP CONSTRAINT "FK_e59dfb8a17a2fd953467e9a92f9"`
    );
    await queryRunner.query(`DROP TABLE "example"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "owner"`);
    await queryRunner.query(`DROP TABLE "basic_details"`);
    await queryRunner.query(`DROP TABLE "base_entity"`);
  }
}
