import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../Firebase/useAuth";
import FirebaseDbService from "../Firebase/FirebaseDbService";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";

// React Icons Import
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TfiMenu } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function Navbar({ currentPage, pages }) {
  let uid = useAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  // console.log(user);

  const cartProducts = useSelector((state) => state.cart.cart);

  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // const [online, setOnline] = useState(navigator.onLine);
  // console.log(online);
  const [theme, setTheme] = useState(null);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    //   setTheme("dark");
    // else setTheme("light");
    const preferedTheme = localStorage.getItem("theme");

    if (preferedTheme) setTheme(preferedTheme);
    else {
      localStorage.setItem("theme", "light");
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") document.querySelector("body").classList.add("dark");
    else document.querySelector("body").classList.remove("dark");
  }, [theme]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // !online && navigate("/networkError");
    // console.log("ji");
    // console.log(online);

    uid && dispatch(FirebaseDbService.getUserData(uid));
    uid && dispatch(FirebaseDbService.getCartProducts(uid));

    // if (window.innerWidth < 1060) {
    //   console.log(window.innerWidth);
    //   return;
    // }

    const bgColorChange = () =>
      window.scrollY >= 100 ? setScroll(true) : setScroll(false);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("scroll", bgColorChange);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("scroll", bgColorChange);
      };
    }
  }, [uid, lastScrollY]);

  const handleThemeSwitch = () => {
    // console.log(theme);
    const changedTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", changedTheme);
    // console.log(localStorage.getItem("theme"));

    setTheme(changedTheme);
  };

  return (
    <div
      className={`transition-all ease-in-out duration-700 active ${
        show && "hidden"
      }`}
    >
      <nav
        className={`${
          scroll
            ? "bg-gray-100 shadow-md"
            : "md:bg-transparent bg-gray-200 md:dark:bg-gray-900"
        } fixed md:flex flex-col w-full top-0 z-20 border-gray-200 md:px-2 sm:px-4 py-2.5 dark:bg-gray-900 transition-all ease-in-out duration-500`}
      >
        <div className="relative flex m-auto w-[95%] md:w-[90%] md:flex-wrap md:flex-row md:items-center md:mx-auto md:max-w-same">
          <div
            className={`${
              openNav ? "pb-4 border-b-2 border-blue-700 " : ""
            } flex justify-between items-center md:justify-start w-full md:w-1/3 md:pb-0 px-3`}
          >
            <span className="font-sen text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-teal-50">
              <Link to={"/"}>
                SHOP<span className="text-blue-700">SPOT</span>
              </Link>
            </span>

            <div className="order-first md:order-last flex justify-center items-center">
              <div className="mr-4 ml-8 md:flex justify-center items-center hidden">
                {showSearch && (
                  <div className="mr-2">
                    <Search />
                  </div>
                )}
                <div onClick={() => setShowSearch(!showSearch)}>
                  <FiSearch id="search" className="h-6 w-6 text-gray-400" />
                  <Tooltip
                    anchorId="search"
                    content="Search user"
                    place="bottom"
                  />
                </div>
              </div>

              {openNav ? (
                <VscChromeClose
                  className="h-6 w-6 md:hidden  text-gray-400"
                  onClick={() => setOpenNav(!openNav)}
                />
              ) : (
                <TfiMenu
                  className="h-5 w-5 md:hidden text-gray-400"
                  onClick={() => setOpenNav(!openNav)}
                />
              )}
            </div>
          </div>

          <div
            className={`${
              openNav ? "pb-4 border-b-2 border-blue-700" : ""
            } flex justify-end items-center w-1/2 md:justify-end md:w-1/3 md:order-2 `}
          >
            {/* <div className="h-18 w-18">
            </div> */}
            <div className="h-18 w-18">
              {theme === "dark" ? (
                <>
                  <BsSun
                    id="lightMode"
                    className={`md:h-7 md:w-7 w-6 h-6 text-gray-400 hidden md:flex`}
                    onClick={handleThemeSwitch}
                  />
                  <Tooltip
                    anchorId="lightMode"
                    content="Light mode"
                    place="bottom"
                  />
                </>
              ) : (
                <>
                  <MdDarkMode
                    id="darkMode"
                    className={`md:h-7 md:w-7 w-6 h-6 text-gray-700 hidden md:flex`}
                    onClick={handleThemeSwitch}
                  />
                  <Tooltip
                    anchorId="darkMode"
                    content="Dark mode"
                    place="bottom"
                  />
                </>
              )}
            </div>

            {/* <div className="h-18 w-18 ml-4"> */}
            {uid ? (
              <>
                <AiOutlinePoweroff
                  onClick={() => {
                    dispatch(FirebaseAuthService.signOutService());
                    navigate("/login");
                    window.location.reload(false);
                  }}
                  className="ml-2 md:ml-4 md:h-7 md:w-7 w-6 h-6 text-gray-400 md:flex"
                  id="logoffID"
                />
                <Tooltip anchorId="logoffID" content="Signout" place="bottom" />
              </>
            ) : (
              <>
                <MdLogin
                  onClick={() => navigate("/login")}
                  className="ml-2 md:ml-4 md:h-7 md:w-7 w-6 h-6 text-gray-400"
                  id="loginID"
                />
                <Tooltip anchorId="loginID" content="Login" place="bottom" />
              </>
            )}
            {/* </div> */}

            <Link to={`/cart`}>
              <div className="relative h-18 w-18">
                <span
                  className={
                    cartProducts.length !== 0
                      ? "-mt-3 -right-1 absolute text-xs font-bold md:px-2 px-1.5 py-0.5 md:py-1 bg-red-600 text-white rounded-full"
                      : ""
                  }
                >
                  {cartProducts.length !== 0 && `${cartProducts.length}`}
                </span>
                <HiOutlineShoppingBag
                  id="cart"
                  className="ml-2 md:ml-4 md:h-7 md:w-7 w-6 h-6 text-gray-400"
                />
                <Tooltip anchorId="cart" content="Cart" place="bottom" />
              </div>
            </Link>

            <Link to={`/profile`}>
              {/* <div className="md:h-18 md:w-18 ml-4 w-6 h-6"> */}
              {user.imageUrl ? (
                <div>
                  <img
                    id="imgProfile"
                    src={user.imageUrl}
                    className="ml-2 md:ml-4 md:h-7 md:w-7 w-6 h-6 rounded-full object-cover"
                  />
                  {/* <Tooltip
                      anchorId="imgProfile"
                      content="Profile"
                      place="bottom"
                    /> */}
                </div>
              ) : (
                <>
                  <CgProfile
                    id="profile"
                    className="ml-2 md:ml-4 md:h-7 md:w-7 w-6 h-6 text-gray-400"
                  />
                  <Tooltip
                    anchorId="profile"
                    content="Profile"
                    place="bottom"
                  />
                </>
              )}
              {/* </div> */}
            </Link>
          </div>

          <div
            className={`${
              openNav ? "top-16" : "-top-96"
            } md:flex md:w-1/3 md:static md:mt-0 fixed w-full left-0 bg-gray-200 dark:bg-gray-900 md:bg-transparent transition-all duration-500 ease-in-out`}
          >
            <ul className="md:m-auto flex flex-col  justify-center md:p-4 font-bold text-sm md:flex-row md:space-x-8 md:mb-0">
              {pages.map((page, i) => {
                if (page === currentPage) {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="block mb-5 md:mb-0 py-2 pl-6 pr-4 rounded
                         md:bg-transparent text-blue-500 md:p-0 dark:text-white"
                      >
                        {page}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="block mb-5 md:mb-0 py-2 pl-6 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {page}
                      </Link>
                    </li>
                  );
                }
              })}

              <li
                className="flex items-center mb-5 md:mb-0 py-2 pl-6 pr-4 text-gray-700 dark:text-gray-400 rounded md:hidden"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <>
                    <span className="mr-2">Light Mode</span>
                    <BsSun
                      id="lightMode"
                      className={`md:h-7 md:w-7 w-5 h-5 text-gray-400 `}
                      // onClick={handleThemeSwitch}
                    />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Dark Mode</span>
                    <MdDarkMode
                      id="darkMode"
                      className={`md:h-7 md:w-7 w-5 h-5 text-gray-700`}
                      // onClick={handleThemeSwitch}
                    />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// <div
//   role="checkbox"
//   aria-checked={isOn ? "true" : "false"}
//   tabIndex={0}
//   onKeyDown={handleKeyDown}
//   onClick={handleClick}
//   className={`cursor-pointer w-11 h-5 ${colour} rounded-full relative px-1.5 flex items-center${
//     isOn ? "" : " justify-end"
//   }`}
// >
//   <div
//     className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
//       isOn ? "translate-x-6" : "translate-x-0"
//     }`}
//   />
//   {isOn ? (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-white"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//     </svg>
//   ) : (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-white"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//         clipRule="evenodd"
//       />
//     </svg>
//   )}
// </div>;
