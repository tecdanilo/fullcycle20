import { CourseModule } from "src/models/coursemodule.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CourseModule)
export class CourseModuleRepository extends Repository<CourseModule> {}