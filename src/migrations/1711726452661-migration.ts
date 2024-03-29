import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711726452661 implements MigrationInterface {
    name = 'Migration1711726452661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "example" ADD "school" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "example" DROP COLUMN "school"`);
    }

}
