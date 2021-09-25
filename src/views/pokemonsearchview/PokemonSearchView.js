import React, { useState, useEffect } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const PokemonSearchView = () => {
  const [serverData, setServerData] = useState();

  const fetchData = async () => {
    const response = await PokemonAPIService.searchPokemon();
    setServerData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>Pokémon Search View</h1>
        <h2>Name: {serverData?.name}</h2>
        <h2>{serverData?.name}</h2>
        <img
          src={serverData?.sprites?.front_default}
          alt="Picture of Pokémon"
        />
      </section>
    </main>
  );
};
