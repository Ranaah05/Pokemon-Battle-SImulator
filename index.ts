import { Dex } from "@pkmn/dex";

const pikachu = Dex.species.get("Pikachu");
console.log(`Loaded ${pikachu.name} of type(s): ${pikachu.types.join(", ")}`);
console.log("Hello, Pokémon Battle Simulator!");
