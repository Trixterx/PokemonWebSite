import React from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const renderLogin = () => {
    if (authenticatedUser)
      return (
        <span className="navbar__login--desktop">
          <Profile />
        </span>
      );
    return (
      <button
        className="navbar__login--desktop"
        onClick={() => history.push(RoutingPath.signInView)}
      >
        Sign In
      </button>
    );
  };
  return (
    <nav className="navbar--desktop">
      <span className="navbar__logo--desktop">Pokémon</span>
      <ul className="navbar__list--deskop">
        <li>
          <button onClick={() => history.push(RoutingPath.homeView)}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => history.push(RoutingPath.pokemonView)}>
            Pokémon
          </button>
        </li>
        <li>
          <button onClick={() => history.push(RoutingPath.pokemonSearchView)}>
            Search Pokémon
          </button>
        </li>
      </ul>
      {renderLogin()}
    </nav>
  );
};
