import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function Profile({ user, sellProductByUser, userUid }) {
  return (
    <>
      <Navbar
        currentPage="Profile"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <div>
        <main className="min-h-screen mt-28 bg-gray-100 bg-opacity-25 dark:bg-gray-900 dark:text-teal-50">
          <div className="mb-8">
            <header className="flex md:flex-row flex-wrap md:items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                <img
                  className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                            border-2 border-pink-600 p-1"
                  src={
                    user.imageUrl
                      ? user.imageUrl
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="profile pic"
                />
              </div>

              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center">
                  <h2 className="text-2xl md:text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0 dark:text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 to-purple-400">
                    {user.firstName && user.lastName
                      ? user.firstName + " " + user.lastName
                      : user.name}
                  </h2>
                </div>

                <h1 className="font-md text-gray-400 mb-4">
                  {user.emailAddress ? user.emailAddress : user.email}
                </h1>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold">
                      {sellProductByUser.length}{" "}
                    </span>
                    posts
                  </li>
                </ul>
                <div className="hidden md:block">
                  <p
                    className={`${
                      user.city ? "" : "hidden"
                    }text-sm text-gray-500 font-md`}
                  >
                    {user.city}
                  </p>
                  <p
                    className={`${
                      user.region ? "" : "hidden"
                    }text-sm text-gray-500 font-md`}
                  >
                    {user.region}
                  </p>
                  <p
                    className={`${
                      user.country ? "" : "hidden"
                    }text-sm text-gray-500 font-md`}
                  >
                    {user.country}
                  </p>
                </div>

                <div className="">
                  <p
                    className={
                      user.firstName
                        ? "hidden"
                        : "text-sm font-sen text-gray-400"
                    }
                  >
                    Profile is not completed
                  </p>
                  {!userUid && (
                    <Link to={"/set-profile"}>
                      <button className="mt-4 py-1 px-1 text-xs rounded bg-blue-500 hover:bg-blue-600 text-white">
                        Edit Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </header>

            <div className="px-px md:px-3">
              <ul
                className="flex items-center justify-around md:justify-center space-x-12  
                            uppercase tracking-widest font-semibold text-xs text-gray-600
                            border-t"
              >
                <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                  <a className="inline-block p-3">
                    <i className="fas fa-th-large text-xl md:text-xs"></i>
                    <span className="hidden md:inline">posts</span>
                  </a>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-0.5 md:gap-0 md:w-10/12 md:m-auto">
                {sellProductByUser.length === 0 ? (
                  // <div className="flex justify-center w-full">
                  <h1 className="col-span-3 m-auto md:text-4xl text-xl mt-8">
                    No products
                  </h1>
                ) : (
                  // </div>
                  sellProductByUser.map((product, index) => {
                    return (
                      <Link to={`/product/${product.id}`} key={index}>
                        <div className="flex items-center justify-center md:h-full p-px md:px-3">
                          <article className="m-auto border-2 md:border-4 md:h-64 md:w-56 h-32 w-full bg-gray-100 text-white relative pb-full md:mb-6">
                            <img
                              className="w-full h-full absolute left-0 top-0 object-cover
                              "
                              src={product.thumbnail}
                              alt="image"
                            />
                          </article>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
