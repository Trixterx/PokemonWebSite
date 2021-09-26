import React, { useState, useEffect } from "react";
import axios from "axios";
import loading_spinner from "../../shared/img/loading_spinner.gif";
import "./PokemonView.css";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const PokemonView = () => {
  const [serverResponse, setServerResponse] = useState();
  const [count, setCount] = useState(1);
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${count}`;
  const [serverData, setServerData] = useState();

  const array = ["A", "B", "C"];
  const displayData = () => {
    return array.map((letter) => (
      <div key={letter}>
        <h3>{letter}</h3>
      </div>
    ));
  };

  const fetchDataAllPokemons = async () => {
    try {
      const response = await PokemonAPIService.getAllPokemons();
      setServerData(response);
    } catch (error) {
      console.log(`Something went wrong with the API call: ${error}`);
    }
  };

  useEffect(() => {
    fetchDataAllPokemons();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setServerResponse(response);
      if (count >= 1) setCount(count + 1);
    } catch (error) {
      console.log(`Error retrieving data from server: ${error}`);
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
      <section>
        <h2>List of Pokémons</h2>
        <button onClick={() => console.log(serverData)}>API</button>
        {displayData()}
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
