import React, { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  return (
    <div className="profile">
      <img
        className="profile__img"
        src="https://thispersondoesnotexist.com/image"
        alt="Random person"
      />
      <span>{authenticatedUser}</span>
    </div>
  );
};
