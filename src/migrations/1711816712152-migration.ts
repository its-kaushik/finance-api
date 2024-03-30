import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711816712152 implements MigrationInterface {
    name = 'Migration1711816712152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "basic_details" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "countryCode" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "profilePictureUrl" character varying, "dateOfBirth" TIMESTAMP NOT NULL, CONSTRAINT "PK_15268a0477a36603ae8352c3fb7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "basic_details"`);
        await queryRunner.query(`DROP TABLE "base_entity"`);
    }

}
