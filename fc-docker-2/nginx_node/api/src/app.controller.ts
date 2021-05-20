import { Controller, Get } from '@nestjs/common';
import { PeoplemoduleService } from './peoplemodule/peoplemodule.service';

@Controller()
export class AppController {
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
  }
}
