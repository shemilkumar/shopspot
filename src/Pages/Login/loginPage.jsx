import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

import firebaseAuthService from "../../Firebase/FirebaseAuthService";
import Footer from "../../Components/Footer";

function LoginPage({ login }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginHandle = (e) => {
    e.preventDefault();
    setLoginEmail("");
    setLoginPassword("");

    login(loginEmail, loginPassword);
  };

  return (
    <>
      <Navbar
        currentPage=""
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Login</h1>

              <input
                type="text"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <input
                type="password"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                onClick={(e) => loginHandle(e)}
              >
                Login
              </button>
            </div>

            <Link to="/signup">
              <div className="text-grey-dark mt-6">
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

{
  /* <section className="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={(e) => loginHandle(e)}
          >
            Sign in
          </button>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>; */
}
