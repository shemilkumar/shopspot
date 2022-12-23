import React from "react";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";
import { useDispatch, useSelector } from "react-redux";
import FirebaseDbService from "../Firebase/FirebaseDbService";
import Search from "./Search";
import LogoutModal from "../Helper/LogoutModal";

function Navbar({ currentPage, pages }) {
  // const [uid, setUid] = useState("");
  // setUid(useAuth());
  // debugger;
  let uid = useAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const cartProducts = useSelector((state) => state.cart.cart);

  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    uid && dispatch(FirebaseDbService.getUserData(uid));
    uid && dispatch(FirebaseDbService.getCartProducts(uid));
    // console.log(uid);

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

  // console.log("user =>", user);
  // console.log("uid =>", uid);
  // console.log(uid, user);

  return (
    <div
      className={`transition-all ease-in-out duration-700 active ${
        show && "hidden"
      }`}
    >
      <nav
        className={`${
          scroll ? "bg-gray-100" : "bg-transparent"
        } fixed flex flex-col w-full top-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 transition-all ease-in-out duration-500`}
      >
        <div className="mx-auto my-1">
          {/* <Link to={"/"}>
            <span className="font-sen self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              SHOP<span className="text-blue-700">SPOT</span>
            </span>
          </Link> */}
        </div>

        <div className="relative container flex flex-wrap items-center mx-auto max-w-same">
          <div className="flex items-center w-1/3">
            <Link to={"/"}>
              <span className="font-sen self-center text-3xl font-semibold whitespace-nowrap dark:text-white mr-8">
                SHOP<span className="text-blue-700">SPOT</span>
              </span>
            </Link>

            <div className="ml-0 flex justify-center items-center">
              {showSearch && (
                <div className="mr-2">
                  <Search />
                </div>
              )}
              <div onClick={() => setShowSearch(!showSearch)}>
                <FiSearch className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-end w-1/3 md:order-2">
            {/* <div className="h-18 w-18">
            </div> */}
            <div className="h-18 w-18">
              {uid ? (
                <AiOutlinePoweroff
                  onClick={() => {
                    <LogoutModal />;
                    console.log("ji");
                    // dispatch(FirebaseAuthService.signOutService());
                    // navigate("/login");
                    // window.location.reload(false);
                  }}
                  className="h-7 w-7 text-gray-400"
                />
              ) : (
                <MdLogin
                  onClick={() => navigate("/login")}
                  className="h-7 w-7 text-gray-400"
                />
              )}
            </div>

            <Link to={`/cart`}>
              <div className="relative h-18 w-18 ml-4">
                <span
                  className={
                    cartProducts.length !== 0
                      ? "-mt-3 -right-1 absolute text-xs font-bold px-2 py-1 bg-red-600 text-white rounded-full"
                      : ""
                  }
                >
                  {cartProducts.length !== 0 && `${cartProducts.length}`}
                </span>
                <HiOutlineShoppingBag className="h-7 w-7 text-gray-400" />
              </div>
            </Link>

            <Link to={`/profile`}>
              <div className="h-18 w-18 ml-4">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : (
                  <CgProfile className="h-8 w-8 text-gray-400" />
                )}
              </div>
            </Link>
          </div>

          {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          > */}
          {/* <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    // clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div> */}
          <div className="flex w-1/3">
            <ul className="m-auto flex flex-col p-4 font-bold text-sm mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {pages.map((page, i) => {
                if (page === currentPage) {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white"
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
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {page}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li> */
}
