import React, { useState, useEffect } from "react";

export const PokemonView = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count är " + count);
    return () => {
      console.log("Hej då!");
    };
  }, [count]);
  return (
    <div>
      <h1>Pokémon</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
