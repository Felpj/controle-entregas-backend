import { OrderStatus } from "src/order/enum/orderStatus.enum";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterStatusOrder1726084540475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "order_status_enum" AS ENUM (${Object.values(OrderStatus).map(value => `'${value}'`).join(', ')});
        `);

        await queryRunner.query(`
            ALTER TABLE "order" ALTER COLUMN "status" TYPE "order_status_enum" USING "status"::text::"order_status_enum";  

        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "order" ALTER COLUMN "status" TYPE VARCHAR(50);
        `);

        await queryRunner.query(`
            DROP TYPE "order_status_enum";
        `);
    }

}
