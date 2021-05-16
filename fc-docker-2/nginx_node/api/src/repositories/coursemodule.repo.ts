import { EntityRepository, Repository } from "typeorm";
import { People } from '../models/peoplemodule.entity';

@EntityRepository(People)
export class PeopleRepository extends Repository<People> {}