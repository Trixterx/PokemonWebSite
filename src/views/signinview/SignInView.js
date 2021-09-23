import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

export const SignInView = () => {
  const [username, setUsername] = useState("Dennis");
  const [password, setPassword] = useState();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div>
      <h1>Sign in view</h1>
      <h2>Username: {authenticatedUser}</h2>
      <input
        placeholder="Enter username"
        onChange={(event) => setAuthenticatedUser(event.target.value)}
      ></input>
      <br />
      <input
        placeholder="Enter password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <br />
      <button>Sign in</button>
    </div>
  );
};
