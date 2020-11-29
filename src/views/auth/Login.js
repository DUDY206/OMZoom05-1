import React, { useState } from "react";

import AuthServices from "services/AuthServices";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = async (event) => {
    event.preventDefault();
    const body = {
      name: userName,
      password: password,
    };
    try {
      const res = await AuthServices.getToken(body);
      console.log("res", res);
    } catch (error) {
      console.error(error);
    }
  };
  const goToRegister = (event) => {
    event.preventDefault();
    window.location = "/register";
  };
  return (
    <div className="layout">
      <div className="main order-md-1">
        <div className="start">
          <div className="container">
            <div className="col-md-12">
              <div className="content">
                <h1>Sign in to Swipe</h1>
                <div className="third-party">
                  <button className="btn item bg-blue">
                    <i className="material-icons">pages</i>
                  </button>
                  <button className="btn item bg-teal">
                    <i className="material-icons">party_mode</i>
                  </button>
                  <button className="btn item bg-purple">
                    <i className="material-icons">whatshot</i>
                  </button>
                </div>
                <p>or use your email account:</p>
                <form>
                  <div className="form-group">
                    <input
                      //   type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email Address"
                      onChange={(event) => setUserName(event.target.value)}
                      required
                    />
                    <button className="btn icon">
                      <i className="material-icons">mail_outline</i>
                    </button>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <button className="btn icon">
                      <i className="material-icons">lock_outline</i>
                    </button>
                  </div>
                  <button
                    className="btn button"
                    onClick={(event) => {
                      login(event);
                    }}
                  >
                    Sign In
                  </button>
                  <div className="callout">
                    <span>
                      Don't have account?{" "}
                      <a href="sign-up.html">Create Account</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aside order-md-2">
        <div className="container">
          <div className="col-md-12">
            <div className="preference">
              <h2>Hello, Friend!</h2>
              <p>
                Enter your personal details and start your journey with Swipe
                today.
              </p>
              <a
                onClick={(event) => {
                  goToRegister(event);
                }}
                className="btn button"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
