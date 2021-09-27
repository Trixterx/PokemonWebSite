import React, { useContext, useState } from "react";
import {
  PokemonContext,
  PokemonProvider,
} from "../../../shared/provider/PokemonProvider";
import "./ProfileView.css";

export const ProfileView = () => {
  const [pokemon, setPokemon] = useContext(PokemonContext);
  return (
    <main>
      <section>
        <h1>Profile</h1>
        <div className="pokemon__card--search">
          <h2>{pokemon?.name}</h2>
          <img src={pokemon?.sprites?.front_default} alt="Picture of Pokémon" />
          <h3>Weight: {pokemon?.weight}kg</h3>
          <h3>Height: {pokemon?.height}</h3>
        </div>
      </section>
    </main>
  );
};
