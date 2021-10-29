import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
