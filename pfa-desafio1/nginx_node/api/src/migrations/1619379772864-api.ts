import {MigrationInterface, QueryRunner} from "typeorm";

export class api1619379772864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("insert into `course_modules` (`name`) values ('Comunicação') ");
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço - Assinaturas com Django') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço - Aplicação do Assinante com React.js (Front-end)') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Arquitetura do projeto prático - Codeflix') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Domain Driven Design e Arquitetura hexagonal') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Service Discovery') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Apache Kafka') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Deploy nos Cloud Providers') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Observabilidade') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Service Mesh com Istio') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Kubernetes') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Integração contínua') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Autenticação entre os microsserviços') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Padrões e técnicas avançadas com Git e Github') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Fundamentos de Arquitetura de Software') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Docker') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço: Catálogo de vídeos com React') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Autenticação e Keycloak') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço: Catálogo de vídeos com Laravel ( Back-end )') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço - API do Catálogo com Node.JS (Back-end)') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('Microsserviço de Encoder de Vídeo com Go Lang') ")
        await queryRunner.query("insert into `course_modules` (`name`) values ('RabbitMQ') ");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
