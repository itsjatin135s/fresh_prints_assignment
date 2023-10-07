import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-white text-xl font-semibold hover:underline"
        >
          Back
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/search-page" className="text-white hover:underline">
            Search
          </NavLink>
          <NavLink to="/history" className="text-white hover:underline">
            History
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
