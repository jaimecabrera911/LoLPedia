import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChampionService } from '../services/champion.service';
import { CreateChampionDto } from '../dto/champion.req.dto';

@Controller('/champions')
export class ChampionController {
  constructor(private readonly championService: ChampionService) {}

  @Get()
  async getChampions() {
    return this.championService.findChampions();
  }

  @Post()
  async createChampion(@Body() createChampionDto: CreateChampionDto) {
    return this.championService.createChampion(createChampionDto);
  }
}
