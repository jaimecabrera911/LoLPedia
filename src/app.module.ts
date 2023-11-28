import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Champion, ChampionSchema } from './schemas/champion.schema';
import { ChampionService } from './services/champion.service';
import { ChampionController } from './controllers/champion.controller';
import { AbilityService } from './services/ability.service';
import { Ability, AbilitySchema } from './schemas/ability.schema';
import { AbilityController } from './controllers/ability.controller';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'username';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password';
const MONGO_HOST = process.env.MONGO_HOST || 'password';
const MONGO_DB = process.env.MONGO_DB || 'database';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`,
    ),
    MongooseModule.forFeature([
      { name: Champion.name, schema: ChampionSchema },
      { name: Ability.name, schema: AbilitySchema },
    ]),
  ],
  controllers: [AppController, ChampionController, AbilityController],
  providers: [AppService, ChampionService, AbilityService],
})
export class AppModule {}
