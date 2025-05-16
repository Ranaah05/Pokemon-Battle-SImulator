import { Dex } from "@pkmn/dex";

export class PokemonService {
  static getPokemon(name: string) {
    const pokemon = Dex.species.get(name);
    return {
      name: pokemon.name,
      types: pokemon.types,
    };
  }
}
