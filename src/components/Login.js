import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../fbManager";
import Loading from "../screens/Load";

const Login = () => {
  const signIn = () => {
    //google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <>
      <Loading />
      <div className="login">
        <div className="login__logo">
          <img src="image/waffle_small_logo.png" alt="logo" />
          <h1>Wa#le</h1>
        </div>

        <Button onClick={signIn} className="login__btn">
          Sign In
        </Button>
      </div>
    </>
  );
};

export default Login;
