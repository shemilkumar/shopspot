import React, { useEffect, useState } from "react";
import FirebaseDbService from "../Firebase/FirebaseDbService";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { priceConvert } from "../Helper/priceConvert";

function CartList({ cartProduct, uid }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(cartProduct.subTotal);
  // const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    // console.log(quantity, subTotal);
    // debugger;
  }, [quantity, subTotal]);

  return (
    <>
      <div className="grid grid-cols-2 place-items-center md:flex justify-between w-[90%] py-8 m-auto border-b-2 dark:border-gray-800 dark:text-teal-50">
        <div className="col-span-2 md:w-2/4 flex justify-center items-center">
          <div className="w-1/4 flex flex-col justify-center">
            <Link to={`/product/${cartProduct.id}`}>
              <img src={cartProduct.images[0]} alt="" />
            </Link>
          </div>
          <div className="details w-2/4 ml-8 ">
            <Link to={`/product/${cartProduct.id}`}>
              <h1 className="md:text-xl text-base font-semibold mb-2">
                {cartProduct.title}
              </h1>
              <p className="md:text-base text-sm font-semibold text-gray-500 tracking-wider dark:text-teal-50">
                Category:{" "}
                <span className="text-gray-800 dark:text-gray-400">
                  {cartProduct.category}
                </span>
              </p>
              <p className="md:text-base text-sm font-semibold text-gray-500 tracking-wider dark:text-teal-50">
                Brand:{" "}
                <span className="text-gray-800 dark:text-gray-400">
                  {cartProduct.brand}
                </span>
              </p>
              {cartProduct.stock && (
                <p className="mb-6 md:text-base text-sm font-semibold text-gray-500 tracking-wider dark:text-teal-50">
                  Available Stocks:{" "}
                  <span
                    className={
                      cartProduct.stock > 20 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {cartProduct.stock}
                  </span>
                </p>
              )}
            </Link>

            <Link to={"/cart"}>
              <div className="md:mt-8 mt-4 mb-4">
                <span
                  className="p-2 rounded-full text-red-600 font-semibold tracking-widest cursor-pointer hover:border-2 md:hover:border-red-500 "
                  onClick={() => {
                    dispatch(
                      FirebaseDbService.deleteCartProduct(uid, cartProduct.id)
                    );
                    // setDeleted(true);
                    // dispatch(FirebaseDbService.getCartProducts(uid));
                  }}
                >
                  Remove
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="items-center w-1/4 m-auto text-center text-xl font-semibold">
          <select
            name="quantity"
            id="quantity"
            // value={cartProduct.quantity ? cartProduct.quantity : 1}
            className="border-none dark:text-teal-50 dark:bg-gray-800"
            onChange={(e) => {
              setQuantity(e.target.value);
              setSubTotal(e.target.value * cartProduct.price);
              dispatch(
                FirebaseDbService.addDataCartProducts(
                  uid,
                  cartProduct.id,
                  e.target.value,
                  cartProduct.price
                )
              );
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <option
                  key={i}
                  value={i + 1}
                  selected={i + 1 === cartProduct.quantity}
                >
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-1/4 m-auto text-center md:text-3xl text-2xl font-semibold">
          {priceConvert(subTotal)}
        </div>
      </div>
    </>
  );
}

export default CartList;
