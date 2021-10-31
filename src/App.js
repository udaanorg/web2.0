import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GraphsPage from "./pages/GraphsPage";
import LandingPage from "./pages/LandingPage";
import AddLogs from "./pages/AddLogs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/graphs" component={GraphsPage} />
          <Route path="/addlogs" component={AddLogs} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
