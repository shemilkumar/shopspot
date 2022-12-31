import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function SignUpPage({ signUp }) {
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpHandle = (e) => {
    e.preventDefault();

    if (!name) alert("Name required");
    if (!signUpEmail) alert("Email required");
    if (!signUpPassword) alert("Password required");

    if (!name || !signUpEmail || !signUpPassword) return;

    signUp(signUpEmail, signUpPassword, confirmPassword, name);

    setName("");
    setSignUpEmail("");
    setSignUpPassword("");
    setConfirmPassword("");
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
            <div className="bg-white dark:bg-gray-900 px-6 py-8 rounded shadow-md text-black dark:text-teal-50 w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>

              <input
                type="text"
                className={`${
                  name.length > 0 ? "border-green-500" : ""
                } block appearance-none border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900`}
                name="fullname"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900"
                name="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />

              <input
                type="password"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900"
                name="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="block border-0 border-b-2 outline-none border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-900"
                name="confirm_password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-1"
                onClick={(e) => signUpHandle(e)}
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-500 mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-500 text-grey-500"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-500 text-grey-500"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <Link to="/login">
              <div className="text-grey-dark mt-6 dark:text-teal-50">
                Already have an account?
                <span className="font-semibold">Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
