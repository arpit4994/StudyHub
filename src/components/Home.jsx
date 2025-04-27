import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className='flex-col p-7 relative top-[90px] left-[80px]'>
          <h1 className="text-white text-[48px] p-7">For Class 10th</h1>
          <p className="relative left-[70px] text-[#3498db] p-1">Developed By Arpit Agarwal</p>
          <Link
            to="/udaan/maths"
            className="relative top-[50px] left-[86px] ml-5 border-2 border-white bg-[#0d1b2a] text-white py-2 px-6 rounded-lg hover:bg-[#1b263b] transition-all duration-300 ease-in-out"
          >
            Visit Udaan
          </Link>
        </div>
        <div className='relative left-[260px] top-[100px]'>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/50118566-00d9-4507-b514-7b86a226caf8.png"
            alt=""
            className="w-[700px] h-[350px] object-cover transition-transform transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
