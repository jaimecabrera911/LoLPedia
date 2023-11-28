import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateChampionDto } from './dto/champion.req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): CreateChampionDto {
    return this.appService.getHello();
  }
}
