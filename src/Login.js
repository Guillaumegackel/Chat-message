import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { signInWithPopup } from 'firebase/auth'
import { db, auth, storage, provider } from "./firebase"

const signIn =()=>{
	signInWithPopup(auth, provider)
.catch((error) => alert(error.message));};


function Login() {
	return (
		<div className="login">
		  <div className="login_logo">
			<img
			  src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
			  alt="icone_imessage"
			/>
			<h1>iMessage</h1>
		  </div>
		  <Button onClick={signIn}>SIGN IN </Button>
		</div>
	  );
	}




export default Login;
