import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1711814665736 implements MigrationInterface {
  name = 'Migration1711814665736';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "testprop"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "testprop" character varying DEFAULT 'testing propr'`
    );
  }
}
