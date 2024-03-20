import React, { useState } from "react";
import { Styles } from "./Style";

function Login() {
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();

  const handleClick = () => {
    console.log({ UserName, Password });
  };

  return (
    <>
      <div style={Styles.image}>
        <div style={Styles.body}>
          <h1 style={Styles.title}>Login</h1>
          <div>
            <div style={Styles.inputBox}>
              <label>User Name:</label>
              <input
                type="email"
                value={UserName}
                placeholder="User Name"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setUserName(e.target.value);
                }}
                style={Styles.input}
              />
            </div>
            <div style={Styles.inputBox}>
              <label>Password:</label>
              <input
                type="password"
                value={Password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={Styles.input}
              />
            </div>

            <div style={Styles.submitBox}>
              <button onClick={() => handleClick()} style={Styles.submit}>
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
//<//input type="button" value="Submit" onclick={Login} />
