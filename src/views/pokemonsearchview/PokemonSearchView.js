import React, { useState, useEffect } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import loading_spinner from "../../shared/img/loading_spinner.gif";
import { useDebounce } from "../../shared/hooks/useDebounce";
import "./PokemonSearchView.css";

export const PokemonSearchView = () => {
  const [serverData, setServerData] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const debounceValue = useDebounce(search, 2000);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await PokemonAPIService.searchPokemon(search);
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(`Something went wrong with the API call: ${error}`);
    }
  };

  const displayData = () => {
    return loading ? (
      <div className="pokemon__container">
        <h2>Loading..</h2>
        <img
          className="loading__spinner"
          src={loading_spinner}
          alt="Loading spinner.."
        />
      </div>
    ) : (
      <div className="pokemon__container">
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
  }, [debounceValue]);

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
