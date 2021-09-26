import React, { useState, useEffect } from "react";
import "./PokemonView.css";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const PokemonView = () => {
  const [serverData, setServerData] = useState();

  const displayData = () => {
    return serverData?.results?.map((pokemon, i) => (
      <div key={pokemon.name}>
        <h3>
          {i + 1}. Name: {pokemon.name}
        </h3>
      </div>
    ));
  };

  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.getAllPokemons();
      setServerData(data);
    } catch (error) {
      console.log(`Something went wrong with the API call: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>List of Pokémons</h1>
        <button onClick={() => console.log(serverData)}>API</button>
        {displayData()}
      </section>
    </main>
  );
};
