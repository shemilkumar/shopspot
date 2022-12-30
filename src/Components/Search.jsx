import React, { useState, useEffect } from "react";
import FirebaseDbService from "../Firebase/FirebaseDbService";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

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
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            value={input}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Find your friend..."
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            required
          />
        </div>
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
