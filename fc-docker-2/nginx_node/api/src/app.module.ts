import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PeoplemoduleModule } from './peoplemodule/peoplemodule.module';
import { Connection } from 'typeorm';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { People } from 'src/models/peoplemodule.entity';

@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // useFactory: async (config: ConfigService) => config.get('default'),
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USER_NAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: [People],
      }),
    }),
    PeoplemoduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
