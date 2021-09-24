import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import "./ProfileDropDown.css";

export const ProfileDropDown = () => {
  const history = useHistory();
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
      <p>Log Out</p>
    </div>
  );
};
