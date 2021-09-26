import React, { useContext } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import UseLocalStorage from "../../../shared/storage/UseLocalStorage";
import "./ProfileDropDown.css";

export const ProfileDropDown = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const logout = () => {
    localStorage.removeItem(UseLocalStorage.username);
    setAuthenticatedUser(null);
    history.push(RoutingPath.homeView);
  };
  return (
    <div className="profiledropdown">
      <p>Firstname Lastname</p>
      <p>email@mail.com</p>
      <hr />
      <button onClick={() => history.push(RoutingPath.profileView)}>
        Profile
      </button>
      <button onClick={() => history.push(RoutingPath.settingsView)}>
        Settings
      </button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
