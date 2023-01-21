import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from "../../Helper/validation";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function LoginPage({ login }) {
  let validatedInputs;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginHandle = (e) => {
    e.preventDefault();

    validatedInputs = validate({ email: loginEmail, password: loginPassword });

    if (validatedInputs.status) {
      login(loginEmail, loginPassword);
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  return (
    <>
      <Navbar
        currentPage=""
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black dark:text-teal-50 w-full dark:bg-gray-900">
              <h1 className="mb-8 text-3xl text-center">Login</h1>

              <input
                type="text"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900"
                name="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />

              {/* {showError && (
                <span className="text-sm text-red-500 px-3 py-1">
                  {validatedInputs.err}
                  working
                </span>
              )} */}

              {/* <span className="text-sm text-red-500 px-3 py-1">
                {validatedInputs?.err ? validatedInputs.err : ""}
              </span> */}

              {/* <span
                className={`${
                  validatedInputs?.err ? "" : "hidden"
                } text-sm text-red-500 px-3 py-1`}
              >
                {validatedInputs?.err ? validatedInputs?.err : ""}
                working
              </span> */}

              <input
                type="password"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900"
                name="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />

              {/* {showError && validatedInputs && (
                <span className={`text-sm text-red-500 px-3 py-1`}>
                  {validatedInputs.err}
                </span>
              )} */}

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-1"
                onClick={(e) => loginHandle(e)}
              >
                Login
              </button>
            </div>

            <Link to="/signup">
              <div className="text-grey-dark mt-6 dark:text-teal-50">
                Don't have an account?
                <span className="font-semibold">Create one</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
