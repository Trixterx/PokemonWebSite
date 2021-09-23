import React from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const renderLogin = () => {
    if (authenticatedUser) return <span>{authenticatedUser}</span>;
    return (
      <button onClick={() => history.push(RoutingPath.signInView)}>
        Sign In
      </button>
    );
  };
  return (
    <nav>
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button onClick={() => history.push(RoutingPath.pokemonView)}>
        Pokemon
      </button>
      {renderLogin()}
    </nav>
  );
};
