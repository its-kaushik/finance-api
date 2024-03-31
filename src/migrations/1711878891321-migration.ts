import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1711878891321 implements MigrationInterface {
  name = 'Migration1711878891321';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "owner" DROP COLUMN "testProp"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "owner" ADD "testProp" integer`);
  }
}
