import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/models/peoplemodule.entity';
import { PeopleRepository } from 'src/repositories/coursemodule.repo';
import { PeoplemoduleController } from './peoplemodule.controller';
import { PeoplemoduleService } from './peoplemodule.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([People])
    ],
    providers: [
        PeoplemoduleService
    ],
    controllers: [PeoplemoduleController],
    exports: [TypeOrmModule]

})
export class PeoplemoduleModule {}
