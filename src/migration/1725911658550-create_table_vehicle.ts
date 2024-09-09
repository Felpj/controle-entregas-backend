import { VehicleType } from "src/vehicles/enum/vehicleType.enum";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVehicle1725911658550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vehicles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',  

                    },
                    {
                        name: "plate",  

                        type: "varchar",
                        length: "10", // Ajuste o tamanho conforme necessário
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "model",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "load_capacity",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: Object.values(VehicleType),
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()", 

                        onUpdate: "now()",
                    }
                ]
            }),
            true // Se true, a tabela só será criada se não existir
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vehicles");
    }

}
