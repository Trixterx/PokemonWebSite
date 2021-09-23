import React from "react";
import { Link } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";

export const NavigationDesktop = () => {
  return (
    <nav>
      <Link to={RoutingPath.homeView}>Home</Link>
      <Link to={RoutingPath.storeView}>Store</Link>
      <Link to={RoutingPath.signInView}>Sign In</Link>
    </nav>
  );
};
