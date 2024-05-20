// src/components/LoginMessage.jsx

import React from "react";
 

function LoginMessage({ isLoggedIn }) {
  return <div>{
    isLoggedIn? <p>Hello, User!</p> : 
                <p>Access Denied</p>
  /* complete the missing code */}</div>;
}

export default LoginMessage;
