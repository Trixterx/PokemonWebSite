import React, { useState, useEffect } from "react";
import "./StoreView.css";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import RoutingPath from "../../routes/RoutingPath";
import { useHistory } from "react-router";

export const StoreView = () => {
  const [serverData, setServerData] = useState();
  const history = useHistory();

  const displayData = () => {
    return serverData?.results?.map((pokemon, i) => (
      <div className="pokemon__cardcontainer" key={pokemon.name}>
        <div className="pokemon__eachcard">
          <h3>
            {i + 1}. {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h3>
          <button
            onClick={() =>
              history.push({
                pathname: RoutingPath.pokemonView,
                state: pokemon,
              })
            }
          >
            More Info
          </button>
        </div>
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
