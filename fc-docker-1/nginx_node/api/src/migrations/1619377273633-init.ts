import {MigrationInterface, QueryRunner} from "typeorm";

export class init1619377273633 implements MigrationInterface {
    name = 'init1619377273633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `course_modules` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `course_modules`");
    }

}
