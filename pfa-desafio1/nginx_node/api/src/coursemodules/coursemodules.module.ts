import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/models/coursemodule.entity';
import { CourseModuleRepository } from 'src/repositories/CourseModuleRepo';
import { CoursemodulesController } from './coursemodules.controller';
import { CoursemodulesService } from './coursemodules.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([CourseModule])
    ],
    providers: [
        CoursemodulesService
    ],
    controllers: [CoursemodulesController],
    exports: [TypeOrmModule]

})
export class CoursemodulesModule {}
