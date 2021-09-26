import React, { useState, useEffect } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const PokemonSearchView = () => {
  const [serverData, setServerData] = useState();
  const [search, setSearch] = useState();

  const fetchData = async () => {
    const response = await PokemonAPIService.searchPokemon(search);
    setServerData(response.data);
  };

  const displayData = () => {
    return (
      <div className="pokemon__search--container">
        <h2>Name: {serverData?.name}</h2>
        <img
          src={serverData?.sprites?.front_default}
          alt="Picture of Pokémon"
        />
        <h2>Weight: {serverData?.weight}</h2>
        <h2>Height: {serverData?.height}</h2>
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <main>
      <section>
        <h1>Pokémon Search View</h1>
        <input
          placeholder="Search for Pokémon"
          onChange={(event) => setSearch(event.target.value)}
        />
        {displayData()}
      </section>
    </main>
  );
};
