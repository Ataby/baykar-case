import React, { useState, useEffect } from "react";
import Hamburger from "../assets/icons/menu-scale.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex md:flex-row md:bg-customCream bg-white text-customBrown justify-between px-6 py-4 md:px-20 md:py-6">
      <h1 className="text-3xl font-bold ">Collers</h1>
      <div className=" justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden "
        >
          <img src={Hamburger} alt="" />
        </button>

        <div
          className={` md:flex items-center gap-4 ${
            isOpen ? "flex" : "hidden"
          } `}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center w-full items-baseline">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li className="border-2 border-customBrown px-4 py-2 rounded-md text-nowrap">
              <a href="#">Sign up NOW</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
