// src/components/NotFound.js
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <NavLink to="/" className="text-blue-500 hover:underline">
          Go Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
