import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Champion, ChampionSchema } from './schemas/champion.schema';
import { ChampionService } from './services/champion.service';
import { ChampionController } from './controllers/champion.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jaimeacabreraa:4lfYzhEfXCbiwsvn@cluster0.lavfl.mongodb.net/game_hub_pro_db',
    ),
    MongooseModule.forFeature([
      { name: Champion.name, schema: ChampionSchema },
    ]),
  ],
  controllers: [AppController, ChampionController],
  providers: [AppService, ChampionService],
})
export class AppModule {}
