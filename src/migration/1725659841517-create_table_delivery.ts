import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableDelivery1725659841517 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({  

                name: "delivery",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment', 

                    },
                    {
                        name: "scheduled_date_time",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "observations",
                        type: "text",
                        isNullable: true,
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
            true 
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("delivery");
    }

}
