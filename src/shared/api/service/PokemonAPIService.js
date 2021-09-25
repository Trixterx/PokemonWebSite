import http from "../PokemonAPI";

http.get("/pokemon/");

const searchPokemon = () => {
  return http.get("/pokemon/onix");
};

export default { searchPokemon };
