export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  env: process.env.NODE_ENV || 'development',
  pokeapi: {
    limits: {
      pokemon: '809',
    },
    baseUrl: 'https://pokeapi.co/api/v2',
    berryUrl: '/berry',
    berryFirmnessUrl: '/berry-firmness',
    berryFlavorUrl: '/berry-flavor',
    generationUrl: '/generation',
    pokedexUrl: '/pokedex',
    versionUrl: '/version',
    versionGroupUrl: '/version-group',
    pokemonUrl: '/pokemon',
  },
});
