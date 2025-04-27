import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#09090b] w-screen h-[75px] shadow-[0_4px_8px_6px_#1a1c2d] text-[#e1e1e1]">
      <div className="flex w-[100%] h-[100%] justify-center">
        <div className="flex w-[50%] justify-between items-center text-center">
          
          <NavLink to="/">
            <img
              src="https://www.shutterstock.com/image-illustration/white-color-background-pure-bright-260nw-2099163190.jpg"
              className="w-[120px] h-[55px]"
            />
          </NavLink>

          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mr-7 border-2 rounded-4xl px-4 py-2 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-[#1abc9c] border-[#1abc9c]"
                    : "text-white border-transparent hover:text-[#1abc9c] hover:border-[#1abc9c]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/udaan/maths"
              className={({ isActive }) =>
                `border-2 rounded-4xl px-4 py-2 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-[#1abc9c] border-[#1abc9c]"
                    : "text-white border-transparent hover:text-[#1abc9c] hover:border-[#1abc9c]"
                }`
              }
            >
              Udaan
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
