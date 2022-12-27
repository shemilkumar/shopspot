import React from "react";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TfiMenu } from "react-icons/tfi";
// import { IoClose } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

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
  const [openNav, setOpenNav] = useState(false);

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
          scroll ? "bg-gray-100" : "md:bg-transparent bg-gray-200"
        } fixed md:flex flex-col w-full top-0 z-20 border-gray-200 md:px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 transition-all ease-in-out duration-500`}
      >
        {/* <div className="mx-auto my-1"> */}
        {/* <Link to={"/"}>
            <span className="font-sen self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              SHOP<span className="text-blue-700">SPOT</span>
            </span>
          </Link> */}
        {/* </div> */}

        <div className="relative flex flex-col w-full md:flex-wrap md:flex-row md:items-center md:mx-auto md:max-w-same">
          <div
            className={`${
              openNav ? "pb-4 border-b-2 border-blue-700" : ""
            } flex justify-between md:justify-start w-full md:w-1/3 md:pb-0 px-3`}
          >
            <Link to={"/"}>
              <span className="font-sen self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                SHOP<span className="text-blue-700">SPOT</span>
              </span>
            </Link>

            <div className="flex justify-center items-center">
              <div className="mr-4 ml-8 flex justify-center items-center">
                {showSearch && (
                  <div className="mr-2">
                    <Search />
                  </div>
                )}
                <div onClick={() => setShowSearch(!showSearch)}>
                  <FiSearch className="h-6 w-6 text-gray-400" />
                </div>
              </div>

              {openNav ? (
                <VscChromeClose
                  className="h-6 w-6 md:hidden"
                  onClick={() => setOpenNav(!openNav)}
                />
              ) : (
                <TfiMenu
                  className="h-5 w-5 md:hidden"
                  onClick={() => setOpenNav(!openNav)}
                />
              )}
            </div>
          </div>

          <div className="md:flex justify-end md:w-1/3 md:order-2 hidden">
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

          <div
            className={`${
              openNav ? "top-16" : "-top-80"
            } md:flex md:w-1/3 md:static md:mt-0 absolute w-full left-0 bg-gray-200 md:bg-transparent transition-all duration-500 ease-in-out`}
          >
            <ul className="md:m-auto flex flex-col  justify-center md:p-4 font-bold text-sm  rounded-lg md:flex-row md:space-x-8 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:mb-0">
              {pages.map((page, i) => {
                if (page === currentPage) {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="block mb-5 md:mb-0 py-2 pl-3 pr-4 rounded
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
                        className="block mb-5 md:mb-0 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
