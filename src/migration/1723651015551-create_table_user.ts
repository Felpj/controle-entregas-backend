import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1723651015551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public."user" (
                id integer NOT NULL,
                name character varying NOT NULL,
                email character varying  
 NOT NULL,
                phone character varying,
                cpf character varying NOT NULL,
                password character varying NOT NULL,
                type_user integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL 
            );
        `);

        await queryRunner.query(`
            ALTER TABLE ONLY public."user"
                ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
        `);

        await queryRunner.query(`
            CREATE SEQUENCE public.user_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
        `);

        await queryRunner.query(`
            ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;
        `);

        await queryRunner.query(`
            ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `);

        await queryRunner.query(`
            ALTER TABLE IF EXISTS public."user"
                OWNER to postgres;
        `);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS public."user";
        `);

        await queryRunner.query(`
            DROP SEQUENCE IF EXISTS public.user_id_seq; 
        `);
    }

}
