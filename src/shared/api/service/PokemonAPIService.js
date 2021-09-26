import http from "../PokemonAPI";

http.get("/pokemon/");

const searchPokemon = (pokemonName) => {
  return http.get(`/pokemon/${pokemonName}`);
};

const getAllPokemons = () => {
  return http.get(`/pokemon?limit=50`);
};

export default { searchPokemon, getAllPokemons };
