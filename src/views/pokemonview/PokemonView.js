import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { ItemsInCartContext } from "../../shared/provider/ItemsInCartProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import "./PokemonView.css";

export const PokemonView = () => {
  const [serverData, setServerData] = useState();
  const location = useLocation();
  const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext);

  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.searchPokemon(
        location?.state?.name
      );
      setServerData(data);
    } catch (error) {
      console.log(`Something went wrong with the API call: ${error}`);
    }
  };

  const displayData = () => {
    return serverData ? (
      <div>
        <div className="pokemon__card--view">
          <h2>
            {location?.state?.name[0].toUpperCase() +
              location?.state?.name.slice(1)}
          </h2>
          <img
            className="pokeinfo__img"
            src={serverData?.sprites?.front_default}
            alt="Picture of Pokémon"
          />
          <h3>Weight: {serverData?.weight}kg</h3>
          <h3>Height: {serverData?.height}m</h3>
        </div>
        <button
          onClick={() =>
            setItemsInCart([
              ...itemsInCart,
              location?.state?.name[0].toUpperCase() +
                location?.state?.name.slice(1),
            ])
          }
        >
          Add to Cart
        </button>
      </div>
    ) : (
      <div>Loading..</div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>Pokémon view</h1>
        {displayData()}
      </section>
    </main>
  );
};
