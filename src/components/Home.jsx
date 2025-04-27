import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col justify-center items-center px-4 mt-[75px]">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="text-center md:text-left p-7 md:w-[40%]">
          <h1 className="text-white text-[32px] md:text-[48px] font-bold mb-4">
            For Class 10th
          </h1>
          <p className="text-[#3498db] mb-5">Developed By Arpit Agarwal</p>
          <Link
            to="/udaan/maths"
            className="border-2 border-white bg-[#0d1b2a] text-white py-2 px-6 rounded-lg hover:bg-[#1b263b] transition-all duration-300 ease-in-out"
          >
            Visit Udaan
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-[50%]">
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/50118566-00d9-4507-b514-7b86a226caf8.png"
            alt="Udaan"
            className="w-full md:w-[700px] md:h-[350px] object-cover transition-transform transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
