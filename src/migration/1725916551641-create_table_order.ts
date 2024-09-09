import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableOrder1725916551641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.order (
                id integer NOT NULL,
                delivery_address character varying NOT NULL,
                status character varying NOT NULL,
                observations character varying,
                scheduled_date_time timestamp without time zone,
                estimated_delivery_time integer,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT 
 NULL  

            );
        `);

        await queryRunner.query(`
            ALTER TABLE ONLY public.order
                ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY (id);
        `);

        await queryRunner.query(`
            CREATE SEQUENCE public.order_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
        `);

        await queryRunner.query(`
            ALTER SEQUENCE public.order_id_seq OWNED BY public.order.id;
        `);

        await queryRunner.query(`
            ALTER TABLE ONLY public.order ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void>  
 {
        await queryRunner.query(`
            DROP TABLE IF EXISTS public.order;
        `);

        await queryRunner.query(`
            DROP SEQUENCE IF EXISTS public.order_id_seq; 
        `);
    }

}
