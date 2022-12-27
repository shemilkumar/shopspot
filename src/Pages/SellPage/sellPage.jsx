import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Constants/constants";
import firebaseStorage from "../../Firebase/FirebaseStorageService";
import ImageUpload from "../../Components/ImageUpload";
import ShortUniqueId from "short-unique-id";

function SellPage({ setSellProduct }) {
  const uud = new ShortUniqueId({ length: 6, dictionary: "alpha" });
  const uudId = uud();
  let id;
  // console.log(uudId);

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ discountPercentage: 25 });
  const thumbnailUrl = useSelector((state) => state.user.thumbnail);
  // const url = useSelector((state) => state.user.imageUrl);
  const images = useSelector((state) => state.user.images);

  // clear url after calling the logic function
  // console.log("images", images);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePrice = (e) => {
    const name = e.target.name;
    const price = (+e.target.value / 82) * 0.75;

    setInputs((prev) => {
      return { ...prev, [name]: price };
    });
  };

  const handleImage = (images) => {
    id = uudId;
    setInputs((prev) => {
      return { ...prev, id };
    });
    dispatch(firebaseStorage.uploadThumbnail(images[0], `images/ProductPics/`));
    dispatch(
      firebaseStorage.uploadSellProductImages(
        images,
        `images/ProductPics/${id}`
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSellProduct(inputs);
  };

  useEffect(() => {
    if (images && thumbnailUrl) {
      setInputs((prev) => {
        return {
          ...prev,
          thumbnail: thumbnailUrl,
          images,
        };
      });
    }
    // console.log(inputs);
  }, [images, thumbnailUrl]);

  // console.log(inputs);

  return (
    <>
      <Navbar
        currentPage="Sell"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />

      <div className="max-w-6xl min-h-screen m-auto p-4">
        <h1 className="text-3xl font-semibold tracking-wider text-center mt-24">
          Sell your Product
        </h1>
        <div className="mt-6">
          <div className="grid gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Enter your Product details
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  75% of your product price will be your final price
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col items-end">
              <label className="block text-sm font-medium text-gray-700">
            Photo
          </label> 
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>

                <div className="ml-5">
                  <label className="flex flex-col justify-center items-center cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="leading-normal">Change</span>
                    <input
                      type="file"
                      // onChange={handleImage}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div> */}
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <h3 className="text-md mb-6 font-medium leading-6 text-gray-900 ">
                      <span className="mb-2 border-b-2 border-gray-200">
                        Include basic details
                      </span>
                    </h3>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product name
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="given-name"
                          className="mt-1 block w-full p-3 border rounded-md  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="brand"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Brand
                        </label>
                        <input
                          type="text"
                          name="brand"
                          id="brand"
                          autoComplete="family-name"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          autoComplete="category-name"
                          className="max-h-1/2 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        >
                          <option className=""></option>

                          {categories.map((category, i) => {
                            return (
                              <option key={i} className="">
                                {category}
                              </option>
                            );
                          })}
                          <option className="">Other</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        {/* <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        > */}
                        {/* Email address */}

                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                          Product Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your description here..."
                          name="description"
                          onChange={handleInput}
                        ></textarea>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone-no"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact Information
                        </label>
                        <input
                          type="tel"
                          name="phoneNo"
                          id="phone-no"
                          autoComplete="mobile"
                          placeholder="Phone number..."
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={handleInput}
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div> */}
                      {/* <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Country
                        </label>
                        <CountrySelector onChange={handleInput} />
                      </div> */}

                      <h3 className="mt-10 col-span-6 text-md font-medium leading-6 text-gray-900 ">
                        <span className="mb-2 border-b-2 border-gray-200">
                          Set a Price
                        </span>
                      </h3>

                      <div className="col-span-4 sm:col-span-3">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          autoComplete="street-address"
                          className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handlePrice}
                        />
                      </div>

                      <h3 className="mt-8 col-span-6 text-md font-medium leading-6 text-gray-900 ">
                        <span className="mb-2 border-b-2 border-gray-200">
                          Upload Product Images
                        </span>
                      </h3>

                      {/* <div className="mt-4 col-span-6">
                        <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                          <div className="">
                             <label className="inline-block mb-2 text-gray-500">
                              Upload Image(jpg,png,svg,jpeg)
                            </label> 
                            <div className="flex items-center justify-center w-full">
                              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Select a photo
                                  </p>
                                </div>
                                <input type="file" className="opacity-0" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* <label
                        class="col-span-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="multiple_files"
                      >
                        Upload multiple files
                      </label>
                      <input
                        class="col-span-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files"
                        type="file"
                        multiple
                      /> */}
                      <div className="mt-2 col-span-6">
                        <ImageUpload handleImage={handleImage} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-sm border border-transparent bg-blue-700 py-1 px-6 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleSubmit}
                      disabled={images.length === 0}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SellPage;

{
  /* <div className="flex h-screen">
<div className="m-auto">
  <form className="p-4 border border-gray-300">
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Product name
      </label>
      <input
        type="text"
        name="title"
        id="title"
        autoComplete="family-name"
        className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={handleInput}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">
        category
      </label>
      <input
        type="text"
        name="category"
        id="category"
        autoComplete="family-name"
        className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={handleInput}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">
        brand
      </label>
      <input
        type="text"
        name="brand"
        id="brand"
        autoComplete="family-name"
        className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={handleInput}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">
        price
      </label>
      <input
        type="text"
        name="price"
        id="price"
        autoComplete="family-name"
        className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={handleInput}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">
        description
      </label>
      <textarea
        type="text"
        name="description"
        id="description"
        autoComplete="family-name"
        className="mt-1 block w-full h-10 p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={handleInput}
      ></textarea>
    </div>
    <label className="block text-sm font-medium text-gray-700">
      Photo
    </label>
    <input
      type="file"
      name="images"
      id="Photo"
      autoComplete="family-name"
      className="mt-1 block w-full p-3 border roundesavd-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      onChange={handleInput}
    />
    <div className="bg-gray-50 py-3 text-right">
      <button
        type="submit"
        className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleSubmit}
        disabled={!url}
      >
        Submit
      </button>
    </div>

    {/* <div className="bg-gray-50 py-3 text-right">
      <button
        className="w-full inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={show}
        // disabled={!url}
      >
        show
      </button>
    </div> 
  </form>
</div>
</div> */
}
