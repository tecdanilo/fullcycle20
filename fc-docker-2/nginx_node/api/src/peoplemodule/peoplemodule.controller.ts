import { Body, Controller, Get, Post } from '@nestjs/common';
import { People } from 'src/models/peoplemodule.entity';

import { PeoplemoduleService } from './peoplemodule.service';

@Controller('people')
export class PeoplemoduleController {
  constructor(private moduleService: PeoplemoduleService) {}

  @Get()
  async list(): Promise<any> {
    let responseBody = '<html><body>';
    responseBody += '<h1>Full Cycle Rocks!</h1>';
    await this.moduleService.findAll().then((resp) => {
      resp.forEach((people) => {
        responseBody += `<li>${people.name}</li>`;
      });
    });

    responseBody += '</body></html>';
    return responseBody;

    return responseBody;
  }

  @Post()
  async save(@Body() data: People): Promise<People> {
    console.log(`post data -> ${JSON.stringify(data)}`);
    return await this.moduleService.create(data);
  }
}
