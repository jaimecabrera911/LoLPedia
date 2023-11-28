import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AbilityService } from '../services/ability.service';
import { AbilityReqDto } from '../dto/ability.req.dto';

@Controller('/abilities')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}

  @Get()
  async getAbilities() {
    return this.abilityService.findAllAbilities();
  }

  @Get()
  async getAbilityByName(@Req() name: string) {
    return this.abilityService.findAbilityByName(name);
  }

  @Post()
  @HttpCode(201)
  async createAbility(@Body() abilityReqDto: AbilityReqDto) {
    return this.abilityService.createAbility(abilityReqDto);
  }
}
