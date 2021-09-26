import React, { useState, useEffect } from "react";
import axios from "axios";
import loading_spinner from "../../shared/img/loading_spinner.gif";
import "./PokemonView.css";

export const PokemonView = () => {
  const [serverResponse, setServerResponse] = useState();
  const [count, setCount] = useState(1);
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${count}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setServerResponse(response);
      if (count >= 1) setCount(count + 1);
    } catch (error) {
      alert(`Error retrieving data from server: ${error}`);
    }
  };

  const showLoadingIfNoAPI = () => {
    if (serverResponse)
      return (
        <div className="pokemon__container">
          <h2>{serverResponse.data?.name}</h2>
          <img
            src={serverResponse?.data?.sprites?.front_default}
            alt="Picture of Pokémon"
          />
        </div>
      );
    else
      return (
        <div className="pokemon__container">
          <h2>Loading..</h2>
          <img
            className="loading__spinner"
            src={loading_spinner}
            alt="Loading spinner.."
          />
        </div>
      );
  };
  return (
    <main>
      <section>
        <h1>Pokémon view</h1>
        {showLoadingIfNoAPI()}
        <br />
        <button onClick={() => fetchData()}>API Call</button>
      </section>
    </main>
  );
};

// export const PokemonView = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Count är " + count);
//     return () => {
//       console.log("Hej då!");
//     };
//   }, [count]);
//   return (
//     <div>
//       <h1>Pokémon view</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span>
//       <button
//         onClick={() => {
//           if (count > 0) setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// };
