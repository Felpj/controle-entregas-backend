import { VehicleType } from "src/vehicles/enum/vehicleType.enum";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarColunaTipoVeiculoParaEnum1725915797120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`
            CREATE TYPE "vehicle_type_enum" AS ENUM (${Object.values(VehicleType).map(value => `'${value}'`).join(', ')});
        `);

        
        await queryRunner.query(`
            ALTER TABLE "vehicles" ALTER COLUMN "type" TYPE "vehicle_type_enum" USING "type"::text::"vehicle_type_enum";
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "vehicles" ALTER COLUMN "type" TYPE VARCHAR(50);
        `);

        
        await queryRunner.query(`
            DROP TYPE "vehicle_type_enum";
        `);
    }

}
