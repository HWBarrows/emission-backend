import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710616549245 implements MigrationInterface {
    name = 'Migrations1710616549245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "activity" character varying NOT NULL, "emission" character varying NOT NULL, "value" numeric(6,2) NOT NULL, "unit" character varying NOT NULL, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "activity"`);
    }

}
