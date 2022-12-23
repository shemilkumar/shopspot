import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseDbService from "../Firebase/FirebaseDbService";
import useAuth from "../Firebase/useAuth";
import { priceConvert } from "../Helper/priceConvert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Card({ product, alertShow }) {
  const uid = useAuth();
  const navigate = useNavigate();
  let star = product.rating ? Math.floor(product.rating / 1) : null;
  if (star === 0) star = 1;

  return (
    <div>
      <div className="w-full max-w-xs bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <Link to={product.id && `/product/${product.id}`}>
          <div className="flex justify-center">
            <LazyLoadImage
              effect="blur"
              className="m-auto h-60 p-1 rounded-t-lg object-cover"
              src={product.images[0]}
              alt="product image"
              // placeholderSrc={placeholderImage}
            />
          </div>
        </Link>
        <div className="px-5 pb-5">
          {" "}
          <Link to={product.id && `/product/${product.id}`}>
            <h5 className="mt-4 text-md font-lg tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>

            <div className="flex items-center mt-2.5 mb-5">
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

              <span
                className={`${
                  product.rating
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-700"
                } text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800`}
              >
                {product.rating ? product.rating : "Second Product"}
              </span>
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <Link to={product.id && `/product/${product.id}`}>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {priceConvert(product.price)}
              </span>
            </Link>
            {/* <div> */}
            <button
              onClick={() => {
                FirebaseDbService.storeCartProducts(product, uid, navigate);
                alertShow();
              }}
              className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
            {/* <ToastContainer /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
