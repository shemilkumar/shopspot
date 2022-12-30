import React, { useEffect, useState } from "react";
import firebaseStorage from "../../Firebase/FirebaseStorageService";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import CountrySelector from "../../Helper/CountrySelector";

function SetProfile({ setUserDetails }) {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.user.imageUrl);

  const [details, setDetails] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(details);
  };

  const handleImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    dispatch(firebaseStorage.uploadImage(image, "images/ProfilePics"));
  };

  const handleCountry = (country) => {
    setDetails((prev) => {
      return { ...prev, country: country.label };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(details);
  };

  useEffect(() => {
    url &&
      setDetails((prev) => {
        return { ...prev, imageUrl: url };
      });
    console.log(details);
  }, [url]);

  return (
    <>
      <Navbar
        currentPage=""
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />

      <div className="max-w-6xl min-h-screen m-auto p-4">
        <h1 className="text-3xl font-semibold tracking-wider text-center mt-24">
          Set Your Profile
        </h1>
        <div className="md:mt-6 mt-10 bg-gray-100">
          <div className="grid gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive your orders.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end">
              {/* <label className="block text-sm font-medium text-gray-700">
              Photo
            </label> */}
              <div className="mt-1 flex items-center">
                <div className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  {url ? (
                    <img
                      src={url}
                      alt="dp"
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  ) : (
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>

                <div className="ml-5">
                  <label className="flex flex-col justify-center items-center cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="leading-normal">Change</span>
                    <input
                      type="file"
                      onChange={handleImage}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full p-3 border rounded-md  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="emailAddress"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
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

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Country
                        </label>
                        <CountrySelector handleCountry={handleCountry} />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="streetAddress"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 p-3 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 p-3 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 p-3 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="houseNo"
                          className="block text-sm font-medium text-gray-700"
                        >
                          House No/Building name
                        </label>
                        <input
                          type="text"
                          name="houseNo"
                          id="houseNo"
                          autoComplete="family-name"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="roadName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Road Name,Area,Colony
                        </label>
                        <input
                          type="text"
                          name="roadName"
                          id="roadName"
                          autoComplete="family-name"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <p className="text-xs text-red-400 font-semibold mb-2">
                      Please update your profile photo before Save
                    </p>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleSubmit}
                      disabled={!url}
                    >
                      save
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

export default SetProfile;
