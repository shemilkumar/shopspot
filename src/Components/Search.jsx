import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FirebaseDbService from "../Firebase/FirebaseDbService";

function Search() {
  const [input, setInput] = useState("");
  // console.log(input);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  const users = allUsers.filter((user) => {
    if (input !== "") {
      if (user.name) return user.name.toLowerCase().includes(input);
      else {
        const name = user.firstName + " " + user.lastName;
        return name.toLowerCase().includes(input);
      }
    }
  });

  useEffect(() => {
    dispatch(FirebaseDbService.getAllUsers());
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Searchfor
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            {/* <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg> */}
          </div>
          <input
            type="text"
            id="simple-search"
            value={input}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            required
          />
        </div>
        {/* <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className="sr-only">Search</span>
        </button> */}
      </div>
      <div className="absolute top-11 w-full bg-white text-gray-500 cursor-pointer font-semibold text-md rounded-md mt-1">
        {users &&
          users.map((user, i) => {
            return (
              <Link key={i} to={`/profile/${user.uid}`}>
                <div
                  className="px-2 py-2  hover:bg-gray-200"
                  onClick={() => setInput("")}
                >
                  {user.name ? user.name : user.firstName + " " + user.lastName}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
