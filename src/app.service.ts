import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/champion.req.dto';
import { Difficulty } from './enums/difficulty.enum';

@Injectable()
export class AppService {
  getHello(): CreateChampionDto {
    const createChampionDto = new CreateChampionDto('Atrox', 'Devil');
    createChampionDto.difficulty = Difficulty.EASY;
    return createChampionDto;
  }
}
