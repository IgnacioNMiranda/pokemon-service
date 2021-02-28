import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { GameService } from './providers/game.service';

@Module({
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
