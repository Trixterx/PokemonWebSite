import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
import { PokemonView } from "../views/pokemonview/PokemonView";
import RoutingPath from "./RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import UseLocalStorage from "../shared/storage/UseLocalStorage";

export const Routes = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const isUserAuthenticated = () => {
    const userFromBrowserStorage = localStorage.getItem(
      UseLocalStorage.username
    );
    setAuthenticatedUser(userFromBrowserStorage);
  };

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.pokemonView} component={PokemonView} />
        <Route path={RoutingPath.signInView} component={SignInView} />
      </Switch>
    </BrowserRouter>
  );
};
