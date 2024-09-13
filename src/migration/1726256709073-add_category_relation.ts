import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCategoryRelation1726256709073 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('product', new TableColumn({
            name: 'category_id',
            type: 'int',
            isNullable: true, 
        }));

        
        await queryRunner.createForeignKey('product', new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "category",  

            onDelete: "SET NULL" 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        const table = await queryRunner.getTable("product");
        const foreignKey = table!.foreignKeys.find(fk => fk.columnNames.indexOf("category_id") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("product", foreignKey);
        }
        await queryRunner.dropColumn("product", "category_id");
    }

}
