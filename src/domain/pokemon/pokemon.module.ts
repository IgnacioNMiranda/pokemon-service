import { Module } from '@nestjs/common';
import { BaseServiceModule } from '../base.service.module';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './providers/pokemon.service';

@Module({
  imports: [BaseServiceModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
