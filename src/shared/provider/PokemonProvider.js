import { useState, createContext } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);
  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {children}
    </PokemonContext.Provider>
  );
};
