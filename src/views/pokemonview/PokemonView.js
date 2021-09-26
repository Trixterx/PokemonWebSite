import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { ItemsInCartContext } from "../../shared/provider/ItemsInCartProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>Pokémon view</h1>
        <h3>
          Name:{" "}
          {location?.state?.name[0].toUpperCase() +
            location?.state?.name.slice(1)}
        </h3>
        <img
          className="pokeinfo__img"
          src={serverData?.sprites?.front_default}
          alt="Picture of Pokémon"
        />
        <h3>Weight: {serverData?.weight}</h3>
        <h3>Height: {serverData?.height}</h3>
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
      </section>
    </main>
  );
};
