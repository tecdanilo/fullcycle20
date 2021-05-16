import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseModule } from 'src/models/coursemodule.entity';
import { CourseModuleRepository } from 'src/repositories/CourseModuleRepo';
import { Repository } from 'typeorm';




@Injectable()
export class CoursemodulesService {

constructor(@InjectRepository(CourseModule) private userRepo: CourseModuleRepository ){}

    findAll(): Promise<Array<CourseModule>> {
        return this.userRepo.find()
    }

    async create(module: CourseModule): Promise<CourseModule> {
        return await this.userRepo.save(module);
    }
}
