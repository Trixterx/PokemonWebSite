import React from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import "./NavigationDesktop.css";
import { Cart } from "../../cart/Cart";

export const NavigationDesktop = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState(true);

  const renderLogin = () => {
    if (authenticatedUser)
      return (
        <span className="navbar__login--desktop">
          <button onClick={() => setIsCartOpen(true)}>Cart</button>
          <Profile />
        </span>
      );
    return (
      <span className="navbar__login--desktop">
        <button onClick={() => setIsCartOpen(true)}>Cart</button>
        <button onClick={() => history.push(RoutingPath.signInView)}>
          Sign In
        </button>
      </span>
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
          <button onClick={() => history.push(RoutingPath.storeView)}>
            Store
          </button>
        </li>
        <li>
          <button onClick={() => history.push(RoutingPath.pokemonSearchView)}>
            Search Pokémon
          </button>
        </li>
      </ul>
      {renderLogin()}
      <Cart isCartOpen={isCartOpen} cartHandler={setIsCartOpen} />
    </nav>
  );
};
