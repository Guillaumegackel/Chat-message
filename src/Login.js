import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {

const signIn =()=>{
	// mettre le auth et provider de firebase
}

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="icone_imessage"
        />
        <h1>iMessage</h1>
      </div>
      <Button>SIGN IN </Button>
    </div>
  );
}

export default Login;
