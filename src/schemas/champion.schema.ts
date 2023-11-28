import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Difficulty } from '../enums/difficulty.enum';

export type ChampionDocument = HydratedDocument<Champion>;

const objectId = mongoose.Schema.Types.ObjectId;

@Schema()
export class Champion {
  @Prop()
  name: string;
  @Prop()
  title: string;
  @Prop()
  lord: string;
  @Prop()
  role: string;
  @Prop()
  image: string;
  @Prop({ type: [{ type: objectId, ref: 'Ability' }] })
  abilities: string[];
  @Prop()
  difficulty: Difficulty;
  @Prop()
  builds: string[];
  @Prop()
  skins: string[];
}

export const ChampionSchema = SchemaFactory.createForClass(Champion);
