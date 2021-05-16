import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CourseModule } from 'src/models/coursemodule.entity';

import { CoursemodulesService } from './coursemodules.service';

@Controller('modules')
export class CoursemodulesController {

    constructor(private moduleService:CoursemodulesService){

    }

    @Get()
    list(): Promise<Array<CourseModule>> {
        return this.moduleService.findAll();
    }

    @Post()
    async save(@Body() data: CourseModule): Promise<CourseModule> {
        console.log(`post data -> ${JSON.stringify(data)}`)
        return await this.moduleService.create(data);
    }

}
