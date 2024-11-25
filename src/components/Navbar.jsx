import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../assets/website/Kalyanlogo.jpg";
import DarkMode from "./DarkMode";
import {MenuLinks} from '../assets/data';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

 
 
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300"
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            target="_blank"
            href=""
            className="flex items-center gap-3"
          >
            <img src={Logo} alt="" className="w-12" />
            <span className="text-2xl sm:text-3xl font-semibold">
              KLDigital
            </span>
          </a>
          
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id}  className="py-4 cursor-pointer">
                  <a
                    href={link}
                   
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
  
              

                </li>
               

                
              ))}
              <button className="primary-btn"><a href="#contact">Get in Touch</a></button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;