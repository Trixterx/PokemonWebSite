import http from "../PokemonAPI";

http.get("/pokemon/");

const searchPokemon = (pokemonName) => {
  return http.get(`/pokemon/${pokemonName}`);
};

export default { searchPokemon };
