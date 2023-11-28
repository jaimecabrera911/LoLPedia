import { AbilityDto } from './ability.dto';
import { Difficulty } from '../enums/difficulty.enum';
import { ApiProperty } from '@nestjs/swagger';
import { PassiveDto } from './passive.dto';

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
  @ApiProperty({ type: PassiveDto })
  passive: PassiveDto;
  @ApiProperty({ type: [AbilityDto] })
  abilities: AbilityDto[];
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
    abilities?: AbilityDto[],
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
