import { ApiProperty } from '@nestjs/swagger';

export class AbilityReqDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  thumbnail: string;
  @ApiProperty()
  video: string;
  @ApiProperty()
  description: string;

  constructor(
    name?: string,
    thumbnail?: string,
    video?: string,
    description?: string,
  ) {
    this.name = name;
    this.thumbnail = thumbnail;
    this.video = video;
    this.description = description;
  }
}
