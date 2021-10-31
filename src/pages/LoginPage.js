import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (email && password) {
      fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then((value) => {
        console.log(value.statusText);
        if (value.statusText === "OK") {
          history.push("/addlogs");
        } else {
          alert("Please check your credentials!");
        }
      });
    } else {
      alert("PLease fill the form!");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="form-container sign-in-container">
          <form className="login_form">
            <h1 className="login_title ">Sign in</h1>
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button onClick={login} className="login_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="login_title">Don't have an account?</h1>
              <p className="login_desc">
                Register and start your journey with us
              </p>
              <Link to="/register">
                <button className="register_btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
