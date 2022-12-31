import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { priceConvert } from "../../Helper/priceConvert";

import CartList from "../../Components/CartList";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Firebase/useAuth";
import cartEmptyImage from "../../assets/Images/empty_cart.png";
import Spinner from "../Spinner";

function Cart({ cartProducts }) {
  const uid = useAuth();
  const navigate = useNavigate();

  let totalPrice = 0,
    mrpTotalPrice = 0;
  const [timeout, setTimeout] = useState(false);
  setInterval(() => {
    setTimeout(true);
  }, 3500);

  useEffect(() => {
    // console.log(cartProducts);
  }, [cartProducts]);

  return (
    <>
      <div>
        <Navbar
          currentPage="Cart"
          pages={["Home", "Products", "Sell", "Profile", "Cart"]}
        />
        <div className="flex flex-col dark:text-teal-50">
          <div className="w-full">
            <h1 className="md:text-5xl text-2xl font-semibold text-center mt-24 mb-8 md:mb-16 md:mx-24">
              Shopping Cart
            </h1>
          </div>

          {cartProducts.length === 0 ? (
            <div className="min-h-screen flex flex-col items-center w-full text-2xl text-gray-500">
              {timeout ? (
                <div>
                  <p className="text-center mb-4">Cart is Empty</p>
                  <img
                    src={cartEmptyImage}
                    alt="empty"
                    className="w-full h-52 md:h-84"
                  />
                </div>
              ) : (
                <Spinner />
              )}
            </div>
          ) : (
            // <div className="min-h-screen flex flex-col items-center w-full text-2xl text-gray-500">
            //   {timeout ? "Cart is empty" : "Loading..."}

            // </div>
            <div className="min-h-screen">
              {uid && (
                <div className="flex flex-col justify-center w-full">
                  {cartProducts.map((product, i) => {
                    // setTotal(tostal + product.price);
                    totalPrice += product.subTotal;

                    mrpTotalPrice += Math.ceil(
                      product.subTotal *
                        (100 / (100 - product.discountPercentage))
                    );
                    return <CartList key={i} cartProduct={product} uid={uid} />;
                  })}
                </div>
              )}

              <div className="mt-16 w-full flex justify-center">
                <div className="w-[90%] flex flex-col items-end mb-16">
                  <p className="text-2xl text-gray-500 ">
                    Sub Total:{" "}
                    <span className="md:text-4xl text-3xl font-semibold tracking-wider text-black dark:text-teal-50">
                      {priceConvert(totalPrice)}
                    </span>
                  </p>
                  <div className="text-gray-500 font-semibold mb-6">
                    You're saving {priceConvert(mrpTotalPrice - totalPrice)}
                  </div>
                  <p className="text-gray-500 font-semibold mb-10">
                    Taxes and shipping calculated at checkout
                  </p>

                  <div className="flex">
                    <Link to={"/products"}>
                      <button
                        type="button"
                        className="mr-4 border-2 border-blue-700 text-blue-700  bg-transparent  focus:ring-4 focus:ring-blue-300 font-semibold md:text-base text-xs md:px-4 md:py-3 px-1.5 py-1.5 dark:bg-transparent dark:hover:bg-transparent focus:outline-none dark:focus:ring-blue-800"
                      >
                        Continue Shopping
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="text-white bg-orange-500 dark:bg-gradient-to-br dark:from-pink-500 dark:to-orange-600 hover:bg-orange-700 font-semibold md:text-base text-xs md:px-12 md:py-3 px-8 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() =>
                        alert(
                          "Checkout Page is in progress, Thanks for visiting 💕️."
                        )
                      }
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Cart;
