import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "../Navigation";
import Register from "./pages/Register.jsx"
import Login from "./pages/Login"
//For now, the login page will have the route of /login. Eventually,
//I want the route to be / when the user is not logged in,
//And then switch to the home page with the route of /

const App = () => {
  <Router>
    <Navigation />
  </Router>
}


export default App;
