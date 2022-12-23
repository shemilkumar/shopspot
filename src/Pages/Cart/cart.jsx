import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartList from "../../Components/CartList";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Firebase/useAuth";
import { priceConvert } from "../../Helper/priceConvert";

function Cart({ cartProducts }) {
  const uid = useAuth();
  const navigate = useNavigate();

  // const [total, setTotal] = useState(0);

  let totalPrice = 0,
    mrpTotalPrice = 0;
  const [timeout, setTimeout] = useState(false);
  setInterval(() => {
    setTimeout(true);
  }, 4000);

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
        <div className="flex flex-col">
          <div className="w-full">
            <h1 className="text-5xl font-semibold text-center mt-24 mb-16 mx-24">
              Shopping Cart
            </h1>
          </div>

          {cartProducts.length === 0 ? (
            <div className="min-h-screen flex flex-col items-center w-full text-2xl text-gray-500">
              {timeout ? "Cart is empty" : "Loading..."}
            </div>
          ) : (
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
                    return (
                      <CartList
                        key={i}
                        cartProduct={product}
                        uid={uid}
                        navigate={navigate}
                      />
                    );
                  })}
                </div>
              )}

              <div className="mt-16 w-full flex justify-center">
                <div className="w-[90%] flex flex-col items-end mb-16">
                  <p className="text-2xl text-gray-500 ">
                    Sub Total:{" "}
                    <span className="text-4xl font-semibold tracking-wider text-black">
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
                        className="mr-4 border-2 border-blue-700 text-blue-700  bg-transparent  focus:ring-4 focus:ring-blue-300 font-semibold text-md px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Continue Shopping
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 font-semibold text-md px-12 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

{
  /* <div key={cartProduct.id} className="max-w-screen-lg m-auto">
            <div className="m-8 p-8 border-2 md:flex items-center py-8 border-t border-gray-200">
              <div className="w-1/4">
                <img
                  src={cartProduct.images[0]}
                  alt={cartProduct.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="text-lg md:pl-3 md:w-3/4 w-full">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  {cartProduct.brand}
                </p>

                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800">
                    {cartProduct.title}
                  </p>
                </div>

                <p className="text-xs leading-3 text-gray-600 pt-2">
                  {cartProduct.rating}
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  {cartProduct.category}
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600">Quantity</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    {cartProduct.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }) */
}
