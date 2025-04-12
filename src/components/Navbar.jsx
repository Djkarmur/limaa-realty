// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md z-10">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         {/* <img
//           src="https://via.placeholder.com/150x50" // Replace with your logo URL
//           alt="MortgageManaged Logo"
//           className="h-8 mr-2"
//         /> */}
//        <Link to='/'><span className="text-xl font-semibold text-blue-500 ">Mortgage App</span></Link> 
//       </div>

//       {/* Links Section */}
//       <div className="hidden md:flex space-x-8 text-gray-600">
//         {/* <a href="#" className="hover:text-blue-500">Buy a Home</a> */}
//         <Link to="/select-loantype" className="hover:text-blue-500">Buy a Home</Link>
//         <a href="#" className="hover:text-blue-500">Refinance</a>
//         <Link to="/mortgage-calculators" className="hover:text-blue-500">Mortgage Calculators </Link>
//         <div className="relative group">
//       <button className="hover:text-blue-500">Learning Center</button>
//       {/* Added pt-2 to create padding bridge */}
//       <div className="absolute left-0 hidden group-hover:block">
//         {/* Actual dropdown container */}
//         <div className="pt-2"> {/* This padding creates the hover bridge */}
//           <div className="bg-white shadow-lg p-2 rounded-md z-10">
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Loan Programs</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Loan Process</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Mortgage Basics</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Online Forms</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">FAQ</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Blog</a>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="relative group">
//       <button className="hover:text-blue-500">About</button>
//       <div className="absolute left-0 hidden group-hover:block">
//         <div className="pt-2">
//           <div className="bg-white shadow-lg p-2 rounded-md">
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1 px-2">Our Story</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-500 py-1 px-2">Contact Us</a>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>

//       {/* Apply Now Button */}
//       <div>
//         <a
//           href="#"
//           className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
//         >
//           Apply Now
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import CalculatorsDropdown from "./NavComponents/CalculatorsDropdown";

const Navbar = ({ isSidebarOn, setIsSidebarOn,handleBurgerClick,setIsModalOpen}) => {
  

  return (
    <>
      <nav className="bg-[#34495E] text-[#ECF0F1] fixed w-full z-20 shadow-lg h-32">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div>
            <img
              src="./limma_navbar.png"
              alt="limaa"
              height="200"
              width="200"
              className="rounded-md h-28 w-52"
            />
            {/* <div className="text-lg font-bold">Heer Realtor </div> */}
          </div>

          <div className="md:hidden flex items-center" onClick={handleBurgerClick}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`flex space-x-6 md:flex ${
              isSidebarOn ? "hidden" : "hidden"
            } md:block`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                About
              </a>
            </li>
            
            <li>
              <a
                href="#services"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Services
              </a>
            </li> */}
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Testimonials
              </a>
            </li>
            <li>
              <ul>
                <CalculatorsDropdown />
              </ul>
              {/* <button
                
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Mortgage Calculator
              </button> */}
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl bg-[#d4d5e0] px-3 pt-3 pb-4 rounded-xl text-[#03233F] font-semibold "
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
