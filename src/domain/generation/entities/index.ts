import { ApiProperty } from '@nestjs/swagger';
import { Description, Name, NamedApiResource } from '../../entities';

export class Generation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [NamedApiResource] })
  abilities: NamedApiResource[];

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty()
  main_region: NamedApiResource;

  @ApiProperty({ type: [NamedApiResource] })
  moves: NamedApiResource[];

  @ApiProperty({ type: [NamedApiResource] })
  pokemon_species: NamedApiResource[];

  @ApiProperty({ type: [NamedApiResource] })
  types: NamedApiResource[];

  @ApiProperty({ type: [NamedApiResource] })
  version_groups: NamedApiResource[];
}

export class Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: Description[];
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: NamedApiResource;
  version_groups: NamedApiResource[];
}

class PokemonEntry {
  entry_number: number;
  pokemon_species: NamedApiResource;
}

export class Version {
  id: number;
  name: string;
  names: Name[];
  version_group: VersionGroup;
}

export class VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: Generation;
  move_learn_methods: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource[];
}
