import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "../Navigation";
// import LandingPage from "../Landing";
import RegisterPage from "../../pages/Register.jsx";
import LoginPage from "../../pages/Login.jsx";
// import HomePage from "../Home";
// import AccountPage from "../Account";

import * as ROUTES from "../../constants/routes"

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />

        {/* <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
      </div>
    </Router>
  );
}