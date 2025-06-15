import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-bgDark py-4 flex justify-between items-center px-6">
      <h1 className="text-3xl font-bold text-white">Top Courses</h1>
      <div className="flex space-x-4 text-white">
        <NavLink
          to="/login"
          className="text-lg px-3 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 border-transparent"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="text-lg px-3 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 border-transparent"
        >
          Signup
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
