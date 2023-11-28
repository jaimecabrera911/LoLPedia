import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AbilityDocument = HydratedDocument<Ability>;

@Schema()
export class Ability {
  @Prop()
  name: string;
  @Prop()
  thumbnail: string;
  @Prop()
  video: string;
  @Prop()
  description: string;
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
