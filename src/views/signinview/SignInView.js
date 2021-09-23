import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import { useHistory } from "react-router";

export const SignInView = () => {
  const [username, setUsername] = useState("Dennis");
  const [password, setPassword] = useState();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const login = () => {
    setAuthenticatedUser(username);
    history.goBack();
  };
  return (
    <div>
      <h1>Sign in view</h1>
      <h2>{username}</h2>
      <input
        placeholder="Enter username"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <br />
      <input
        placeholder="Enter password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <br />
      <button onClick={() => login()}>Sign in</button>
    </div>
  );
};
