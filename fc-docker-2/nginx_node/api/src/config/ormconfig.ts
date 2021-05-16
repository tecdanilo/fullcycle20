import {ConnectionOptions} from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...


// Check typeORM documentation for more information.
const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['src/models/*.entity{.ts,.js}'],

  synchronize: false,
  migrationsRun: false,
  logging: true,
  logger: 'file',
  migrations: ['src/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
  },
};

export = ormconfig;