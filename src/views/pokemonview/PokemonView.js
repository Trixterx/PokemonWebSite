import React from "react";
import { useLocation } from "react-router";

export const PokemonView = () => {
  const location = useLocation();
  return (
    <main>
      <section>
        <h1>Pokémon view</h1>
        <h3>{location?.state?.name}</h3>
      </section>
    </main>
  );
};
