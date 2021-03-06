import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Navigation = () => {
  
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER}>Register</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
