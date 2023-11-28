import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Champion } from '../schemas/champion.schema';
import { CreateChampionDto } from '../dto/champion.dto';

@Injectable()
export class ChampionService {
  constructor(
    @InjectModel(Champion.name) private championModel: Model<Champion>,
  ) {}

  async createchampion(createChampionDto: CreateChampionDto) {
    const championModel = new this.championModel(createChampionDto);
    return championModel.save();
  }

  async findChampions() {
    return this.championModel.find().exec();
  }
}
