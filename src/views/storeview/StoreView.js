import React, { useState, useEffect } from "react";
import "./StoreView.css";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const StoreView = () => {
  const [serverData, setServerData] = useState();

  const displayData = () => {
    return serverData?.results?.map((pokemon, i) => (
      <div className="pokemon__container--view" key={pokemon.name}>
        <h3>
          {i + 1}. {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <br />
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
        <h1>Store</h1>
        <button onClick={() => console.log(serverData)}>Log API Call</button>
        <br />
        {displayData()}
      </section>
    </main>
  );
};
