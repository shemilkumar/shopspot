import React from "react";
import Navbar from "../../Components/Navbar";
import ImageGrid from "../../Components/ImageGrid";
import Footer from "../../Components/Footer";
import FirebaseDbService from "../../Firebase/FirebaseDbService";
import { priceConvert } from "../../Helper/priceConvert";

import { TbTruckDelivery, TbReplace, TbShieldCheck } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

function ProductDetail({ product, navigate, uid }) {
  let star = product.rating ? Math.floor(product.rating / 1) : null;
  if (star === 0) star = 1;

  const handleDeletePost = async () => {
    await FirebaseDbService.deleteSellProductPost(product.id);
    navigate("/profile");
  };

  return (
    <>
      <Navbar
        currentPage="Products"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />

      <div className="w-full min-h-screen flex justify-center dark:text-teal-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 md:m-auto mt-24 w-[90%] h-[80%]">
          <div className="m-auto w-[100%] h-[100%]">
            <ImageGrid images={product.images} />
          </div>

          <div className="m-auto">
            <h1 className="m-4 text-4xl font-thin">{product.title}</h1>
            <h1 className="m-4 text-md">
              <div className="flex">
                <div
                  className={`${
                    product.rating
                      ? "flex items-center mr-2"
                      : "flex items-center"
                  }`}
                >
                  {star &&
                    Array.from({ length: star }).map((_, i) => {
                      return (
                        <svg
                          key={i}
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title key={i + 10}>star</title>
                          <path
                            key={i + 20}
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          ></path>
                        </svg>
                      );
                    })}
                </div>
                <span
                  className={`px-2 py-0 rounded-xl ${
                    product.rating
                      ? "bg-green-600 text-white"
                      : "border-orange-500 border text-orange-500 texgrade text-xs"
                  } font-semibold `}
                >
                  {product.rating
                    ? product.rating.toFixed(1)
                    : "Second Product"}
                </span>
              </div>
            </h1>

            <p className="mt-4 ml-4 text-xl text-red-500">
              {/* {`-${product.discountPercentage.toFixed(1)}$%`} */}
              <span className="text-4xl text-black dark:text-teal-100 font-sen font-medium">
                {" "}
                {priceConvert(product.price)}
              </span>
            </p>
            <p className="mx-4 my-0 text-gray-500 text-md">
              M.R.P :{" "}
              <strike className="strike">
                {priceConvert(
                  (
                    product.price *
                    (100 / (100 - product.discountPercentage))
                  ).toFixed(2)
                )}
              </strike>
            </p>

            <p className="m-4 w-10/12 md:w-2/3">{product.description}</p>

            <div className="text-4xl text-center border-b-2 dark:border-gray-800 p-4 grid grid-cols-4 md:w-10/12 w-full items-center">
              <div className="flex flex-col items-center">
                <TbTruckDelivery />
                <p className="mt-2 text-xs">Free Delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <TbReplace />
                <p className="mt-2 text-xs">30 Days Replacement</p>
              </div>
              <div className="flex flex-col items-center">
                <GiTakeMyMoney />
                <p className="mt-2 text-xs">Cash on Delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <TbShieldCheck />
                <p className="mt-2 text-xs">2 Year Warranty</p>
              </div>
            </div>

            <div className="md:w-8/12 w-[90%] grid grid-cols-3 gap-x-4 m-auto md:mx-3">
              <div className="p-2 font-semibold md:text-base text-sm">
                <p className="mt-4">Brand</p>
                <p className="mt-4">Category</p>
                <p
                  className={
                    product.stock ? "text-green-600 mt-4" : "mt-4 text-red-600"
                  }
                >
                  {product.stock && "Stock"}
                </p>
              </div>

              <div className="p-2 col-span-2 md:text-base text-sm">
                <p className="mt-4">{product.brand}</p>
                <p className="mt-4">{product.category}</p>
                <p className="mt-4">
                  {product.stock && `${product.stock} stocks available`}
                </p>
              </div>
            </div>

            {product.soldUser && (
              <div className="m-4 w-10/12 md:w-2/3">
                <h1 className="text-gray-600 font-semibold px-2">Sold By</h1>
                <Link to={`/profile/${product.soldUser.uid}`}>
                  <span className="px-2.5 py-1 font-semibold text-sm border-blue-700 border text-blue-700 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
                    {product.soldUser?.name ? product.soldUser.name : ""}
                  </span>
                </Link>
              </div>
            )}

            {product.soldUser && product.soldUser.uid === uid && (
              <button
                className="uppercase text-sm p-2 rounded mx-4 text-teal-50 bg-gradient-to-br from-red-700 to-pink-600"
                onClick={handleDeletePost}
              >
                Delete post
              </button>
            )}

            <div className="flex my-10 text-sm md:text-lg font-lg  font-sen">
              <button
                type="button"
                className="ml-4 text-white bg-blue-700 dark:bg-gradient-to-br dark:from-blue-700 dark:to-cyan-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() =>
                  FirebaseDbService.storeCartProducts(
                    product,
                    uid,
                    navigate,
                    true
                  )
                }
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Checkout Page is in progress, Thanks for visiting 💕️."
                  )
                }
                className="text-white bg-orange-500 dark:bg-gradient-to-br dark:from-orange-400 dark:to-red-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
