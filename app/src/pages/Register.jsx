import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Button from "../components/Button";

export default function Register() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (
    <div className="w-screen h-screen bg-indigo-900">
      <div className="flex flex-col items-center">
        <div className="pt-24">
          <p className="text-white text-8xl font-sans">chattr.</p>
        </div>
        <div name="usernameText" className="mt-4">
          <p className="text-white font-sans">Username</p>
        </div>
        <input
          name="usernameField"
          className="rounded-full text-black font-sans px-1"
          ref={usernameRef}
        ></input>
        <div name="passwordText" className="mt-4">
          <p className="text-white font-sans">Password</p>
        </div>
        <input
          name="passwordField"
          className="rounded-full text-black font-sans px-1"
          type="password"
          ref={passwordRef}
        ></input>
        <div name="passwordText" className="mt-4">
          <p className="text-white font-sans">Confirm Password</p>
        </div>
        <input
          name="passwordConfirmField"
          className="rounded-full text-black font-sans px-1"
          type="password"
          ref={passwordConfirmRef}
        ></input>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Link to="/register">
          <Button label={"Register"} />
        </Link>
        <Link to="/home">
          <Button label={"Login"} />
        </Link>
      </div>
    </div>
    )
}