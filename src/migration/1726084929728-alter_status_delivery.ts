import { DeliveryStatus } from "src/delivery/enum/deliveryStatus.enum";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterStatusDelivery1726084929728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "delivery_status_enum" AS ENUM (${Object.values(DeliveryStatus).map(value => `'${value}'`).join(', ')});
        `);

        await queryRunner.query(`
            ALTER TABLE "delivery" ALTER COLUMN "status" TYPE "delivery_status_enum" USING "status"::text::"delivery_status_enum";
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "delivery" ALTER COLUMN "status" TYPE VARCHAR(50);
        `);

        await queryRunner.query(`
            DROP TYPE "delivery_status_enum";
        `);
    }

}
