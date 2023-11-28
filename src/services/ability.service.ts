import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ability } from '../schemas/ability.schema';
import { Model } from 'mongoose';
import { AbilityReqDto } from '../dto/ability.req.dto';

@Injectable()
export class AbilityService {
  constructor(
    @InjectModel(Ability.name) private readonly abilityModel: Model<Ability>,
  ) {}

  async createAbility(abilityReqDto: AbilityReqDto) {
    const abilityModel = new this.abilityModel(abilityReqDto);
    return abilityModel.save();
  }

  async findAllAbilities() {
    return this.abilityModel.find().exec();
  }

  async findAbilityByName(name: string) {
    return this.abilityModel.findOne({ name: name });
  }
}
