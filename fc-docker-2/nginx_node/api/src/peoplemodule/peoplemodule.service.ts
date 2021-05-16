import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/models/peoplemodule.entity';
import { PeopleRepository } from 'src/repositories/coursemodule.repo';
import { Repository } from 'typeorm';




@Injectable()
export class PeoplemoduleService {

constructor(@InjectRepository(People) private userRepo: PeopleRepository ){}

    findAll(): Promise<Array<People>> {
        return this.userRepo.find()
    }

    async create(module: People): Promise<People> {
        return await this.userRepo.save(module);
    }
}
