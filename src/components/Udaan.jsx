import React from "react";
import { NavLink } from "react-router-dom";

const Udaan = () => {
  return (
    <div>
      <div className="bg-[#09090b] w-screen h-[120px] shadow-[0_4px_8px_6px_#1a1c2d] text-[#e1e1e1] flex justify-center items-center">
        <div className="w-[50%] flex flex-wrap gap-[25px] justify-center">
          {[
            { to: "/udaan/maths", label: "Maths" },
            { to: "/udaan/physics", label: "Physics" },
            { to: "/udaan/chemistry", label: "Chemistry" },
            { to: "/udaan/biology", label: "Biology" },
            { to: "/udaan/history", label: "History" },
            { to: "/udaan/geography", label: "Geography" },
            { to: "/udaan/civics", label: "Civics" },
            { to: "/udaan/economics", label: "Economics" },
            { to: "/udaan/hindi", label: "Hindi" },
            { to: "/udaan/english", label: "English" },
            { to: "/udaan/hindigr", label: "Hindi Grammar" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md transition-all duration-300 ease-in-out border-2 ${
                  isActive
                    ? "text-[#1abc9c] border-[#1abc9c]"
                    : "text-[#e1e1e1] hover:text-[#1abc9c] hover:border-[#1abc9c]" 
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Udaan;
