import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Difficulty } from '../enums/difficulty.enum';

export type AbilityDocument = HydratedDocument<Ability>;

@Schema()
export class Ability {
  @Prop()
  name: string;
  @Prop()
  nickname: string;
  @Prop()
  role: string;
  @Prop()
  image: string;
  @Prop()
  abilities: Ability[];
  @Prop()
  passive: string;
  @Prop()
  difficulty: Difficulty;
  @Prop()
  builds: string[];
  @Prop()
  skins: string[];
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
