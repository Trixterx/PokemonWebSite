import React from "react";
import { NavigationDesktop } from "./navigationdesktop/NavigationDesktop";
import { NavigationMobile } from "./navigationmobile/NavigationMobile";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";

export const Navigation = () => {
  const { width } = useWindowDimensions();

  const displayNavigation = () => {
    return width <= 1100 ? <NavigationMobile /> : <NavigationDesktop />;
  };
  return <>{displayNavigation()}</>;
};
