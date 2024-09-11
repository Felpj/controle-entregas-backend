import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCategory1726085829767 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({  

                name: "category",
                columns: [
                    {
                        name: "id",
                        type: "int", 
                        isPrimary: true,
                        isGenerated: true, 
                        generationStrategy: 'rowid', // Usamos a estratégia 'rowid'
                    },
                    {
                        name: "name",
                        type: "varchar",
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
            true 
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("category"); 

    }

}
