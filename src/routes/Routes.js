import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from "../views/signinview/SignInView";
import { PokemonView } from "../views/pokemonview/PokemonView";
import RoutingPath from "./RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import UseLocalStorage from "../shared/storage/UseLocalStorage";
import { ProfileView } from "../views/authenticatedviews/profileview/ProfileView";
import { SettingsView } from "../views/authenticatedviews/settingsview/SettingsView";
import { PokemonSearchView } from "../views/pokemonsearchview/PokemonSearchView";

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

  const blockIfAuthenticated = (view) => {
    if (authenticatedUser) return HomeView;
    else return view;
  };

  const AuthenticationRequired = (view) => {
    if (!authenticatedUser) return HomeView;
    else return view;
  };

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.pokemonView} component={PokemonView} />
        <Route
          exact
          path={RoutingPath.pokemonSearchView}
          component={PokemonSearchView}
        />
        <Route
          exact
          path={RoutingPath.signInView}
          component={blockIfAuthenticated(SignInView)}
        />
        <Route
          exact
          path={RoutingPath.profileView}
          component={AuthenticationRequired(ProfileView)}
        />
        <Route
          exact
          path={RoutingPath.settingsView}
          component={AuthenticationRequired(SettingsView)}
        />
      </Switch>
    </BrowserRouter>
  );
};
