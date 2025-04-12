import React from "react";
import HouseIcon from "../assets/HouseIcon";
import Person from "../assets/Person";
import FileEarmarkText from "../assets/FileEarmarkText";
import Images from "../assets/Images";
import HddStack from "../assets/HddStack";
import Envelope from "../assets/Envelope";
import CalculatorsDropdown from "./NavComponents/CalculatorsDropdown";
import { Calculator } from "lucide-react";

const Sidebar = ({ setIsSidebarOn,setIsModalOpen }) => {
  return (
    <div
      className="fixed left-2  w-[200px] h-screen bg-fixed bg-cover bg-center z-20 "
      // style={{ zIndex: 2147483647 }}
    >
      <ul className="flex flex-col gap-2 text-lg z-50">
        {/* <li className=" group flex justify-center items-center gap-1 lg:w-20 lg:h-20 w-20 h-20 lg:group-hover:py-4 lg:group-hover:px-10 py-4 px-10 rounded-full  bg-blue-700 ">
         
          <a href="#home" className="flex items-center gap-1"> <HouseIcon/> <span className=" lg:hidden lg:group-hover:inline">Home</span>  </a>
        </li> */}
        <li
          className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 hover:w-auto hover:h-auto hover:py-4 hover:px-10  bg-[#34495E] text-white hover:text-white transition duration-300"
          onClick={() => setIsSidebarOn(false)}
        >
          <a href="#home" className="flex items-center gap-1">
            <HouseIcon />
            <span className="lg:hidden lg:group-hover:inline">Home</span>
          </a>
        </li>
        <li
          className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10  bg-[#34495E] text-white hover:text-white transition duration-300"
          onClick={() => setIsSidebarOn(false)}
        >
          <a href="#about" className="flex items-center gap-1">
            <Person />
            <span className="lg:hidden lg:group-hover:inline">About Dhaval</span>
          </a>
        </li>
        <li
          className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10  bg-[#34495E] text-white hover:text-white transition duration-300"
          onClick={() => setIsSidebarOn(false)}
        >
          <a href="#services" className="flex items-center gap-1">
            <HddStack />
            <span className="lg:hidden lg:group-hover:inline">Services</span>
          </a>
        </li>
        <li
          className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10   bg-[#34495E] text-white hover:text-white transition duration-300"
          onClick={() => setIsSidebarOn(false)}
        >
          <a href="#testimonials" className="flex items-center gap-1">
            <Images />
            <span className="lg:hidden lg:group-hover:inline">
              Testimonials
            </span>
          </a>
        </li>
        <li  className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10   bg-[#34495E] text-white hover:text-white transition duration-300">
          <button
            className="flex items-center gap-1"
            onClick={() => setIsModalOpen(true)}
          >
            {/* <FileEarmarkText/> */}
            <span className="hidden lg:inline">
            <Calculator className='w-6 h-6 mr-1'/>
            </span>
           
           <span className="lg:hidden lg:group-hover:inline">
           <ul>
                <CalculatorsDropdown />
            </ul>
            </span>
           
          </button>
        </li>
        {/* <li className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10   bg-[#34495E] text-white hover:text-white transition duration-300" onClick={() => setIsSidebarOn(false)}>
          <a href="#mission" className="flex items-center gap-1">
            <Images />
            <span className="lg:hidden lg:group-hover:inline">Mission</span>
          </a>
        </li> */}
        {/* <li className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14  lg:rounded-full rounded-full lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10 py-4 px-10 bg-[#34495E] text-[#45505b]  hover:text-white transition duration-300">
          <a href="#portfolio" className="flex items-center gap-1">
            <Images />
            <span className="lg:hidden lg:group-hover:inline">Portfolio</span>
          </a>
        </li> */}
        {/* <li className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10  bg-[#34495E] text-white hover:text-white transition duration-300" onClick={() => setIsSidebarOn(false)}>
          <a href="#services" className="flex items-center gap-1">
            <HddStack />
            <span className="lg:hidden lg:group-hover:inline">Services</span>
          </a>
        </li> */}
        <li
          className="group flex justify-center items-center gap-1 lg:w-14 lg:h-14 lg:rounded-full rounded-full py-4 px-10 lg:py-4 lg:px-4 lg:hover:w-auto lg:hover:h-auto lg:hover:py-4 lg:hover:px-10  bg-[#34495E] text-white hover:text-white transition duration-300"
          onClick={() => setIsSidebarOn(false)}
        >
          <a href="#contact" className="flex items-center gap-1">
            <Envelope />
            <span className="lg:hidden lg:group-hover:inline">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
