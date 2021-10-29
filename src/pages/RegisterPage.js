import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kitchen, setKitchen] = useState("");

  const signup = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/api/v1/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        kitchen,
        dateOfBirth: "1970-01-01",
      }),
    }).then((value) => {
      console.log(value);
    });
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="form-container register-container">
            <form method="POST" className="register_form">
              <h1 className="login_title mb-4">Register</h1>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
              <input
                name="kitchen"
                placeholder="Kitchen no."
                type="text"
                value={kitchen}
                onChange={(text) => setKitchen(text.target.value)}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
              <button onClick={signup} className="login_btn mt-3">
                register
              </button>
            </form>
          </div>
          <div className="reg-overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="login_title">Already have an account?</h1>
                <p className="login_desc">
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/login">
                  <button className="register_btn">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
