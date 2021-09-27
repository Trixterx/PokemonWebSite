import React, { useState, useEffect, useContext } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import loading_spinner from "../../shared/img/loading_spinner.gif";
import { PokemonContext } from "../../shared/provider/PokemonProvider";

export const HomeView = () => {
  const [serverData, setServerData] = useState();
  const [pokemon, setPokemon] = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await PokemonAPIService.searchPokemon("pikachu");
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(`Something went wrong with the API call: ${error}`);
    }
  };

  const displayData = () => {
    return loading ? (
      <div className="pokemon__spinnercontainer--search">
        <h2>Loading..</h2>
        <img
          className="loading__spinner--search"
          src={loading_spinner}
          alt="Loading spinner.."
        />
      </div>
    ) : (
      <div>
        <h1>Home</h1>
        <h3>Welcome to my Pokémon store!</h3>
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section>{displayData()}</section>
    </main>
  );
};
