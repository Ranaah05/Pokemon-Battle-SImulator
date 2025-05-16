import { PokemonService } from "./services/pokemonService";

const pikachu = PokemonService.getPokemon("Pikachu");
console.log(`Loaded ${pikachu.name} of type(s): ${pikachu.types.join(", ")}`);
console.log("Hello, Pokémon Battle Simulator!");
