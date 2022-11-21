import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebaseStorage from "../../Firebase/FirebaseStorageService";

function SellPage({ setSellProduct }) {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const url = useSelector((state) => state.user.imageUrl);
  // clear url after calling the logic function

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target?.files) {
      const image = e.target.files[0];
      dispatch(firebaseStorage.uploadImages(image, "images/ProductPics"));
    } else {
      setInputs((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSellProduct(inputs);
  };

  useEffect(() => {
    url &&
      setInputs((prev) => {
        return { ...prev, imageUrl: url };
      });
  }, [url]);

  return (
    <div className="flex h-screen">
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
            className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default SellPage;
