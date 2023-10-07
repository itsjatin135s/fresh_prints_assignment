import React from "react";

import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to Git Hub Search Engine
        </h1>
        <p className="text-gray-600 text-lg mb-8">Find profiles with ease.</p>
        <div className="space-x-4">
          <NavLink
            to="/search-page"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Search
          </NavLink>
          <NavLink
            to="/history"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            History
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
