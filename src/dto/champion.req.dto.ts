import { AbilityReqDto } from './ability.req.dto';
import { Difficulty } from '../enums/difficulty.enum';
import { ApiProperty } from '@nestjs/swagger';
import { PassiveReqDto } from './passive.req.dto';

export class CreateChampionDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  lore: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  image: string;
  @ApiProperty({ type: PassiveReqDto })
  passive: PassiveReqDto;
  @ApiProperty({ type: [AbilityReqDto] })
  abilities: AbilityReqDto[];
  @ApiProperty({ name: 'difficulty', enum: Difficulty })
  difficulty: Difficulty;
  @ApiProperty()
  builds: string[];
  @ApiProperty()
  skins: string[];

  constructor(
    name?: string,
    title?: string,
    role?: string,
    image?: string,
    abilities?: AbilityReqDto[],
    difficulty?: Difficulty,
    builds?: string[],
    skins?: string[],
  ) {
    this.name = name;
    this.title = title;
    this.role = role;
    this.image = image;
    this.abilities = abilities;
    this.difficulty = difficulty;
    this.builds = builds;
    this.skins = skins;
  }
}
