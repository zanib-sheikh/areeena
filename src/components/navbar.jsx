import React, { useState } from "react";
import logoa from "../assets/logoa.png";
import menu from "../assets/menu.png"; 
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute("dir", lng === "ar" ? "rtl" : "ltr"); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="font-montserrat bg-[rgb(29,30,31)]">
      <nav className="relative flex items-center z-10 justify-between px-6 mt-0 bg-transparent text-white">
        {/* Logo */}
        <div className={`flex items-center ${i18n.language === "ar" ? "ml-auto" : ""}`}>
          <img src={logoa} alt="Logo" className="w-36 h-auto object-contain" />
        </div>

        {/* Desktop View - Navigation Links */}
        <div className={`hidden md:flex items-start align-middle mx-auto space-x-16 mt-0 text-sm font-bold font-lg ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}>
          <a href="#about" className="hover:text-green-500 transition duration-300">
            {t("navbar.about")}
          </a>
          <a href="#feature" className="hover:text-green-500 transition duration-300">
            {t("navbar.feature")}
          </a>
          <a href="#subscription" className="hover:text-green-500 transition duration-300">
            {t("navbar.subscription")}
          </a>
        </div>

        {/* Sign Up Button (Desktop and Mobile View) */}
        <div className={`hidden md:block ${i18n.language === "ar" ? "mr-auto" : ""}`}>
          <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
            {t("navbar.signup")}
            <span 
      className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "rotate-180" : ""}`} // Increased gap using ml-4
    >
      ➙
    </span>
          </button>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden flex py-1 items-center">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle Navigation"
          >
            <img src={menu} alt="Hamburger Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Dropdown Menu (Mobile View) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full h-auto bg-black py-2 flex flex-col items-center space-y-4 ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <a href="#about" className="hover:text-green-500 text-white transition duration-300">
            {t("navbar.about")}
          </a>
          <a href="#feature" className="hover:text-green-500 text-white transition duration-300">
            {t("navbar.feature")}
          </a>
          <a href="#subscription" className="hover:text-green-500 text-white transition duration-300">
            {t("navbar.subscription")}
          </a>
          <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
            {t("navbar.signup")}
            <span 
      className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "rotate-180" : ""}`} // Increased gap using ml-4
    >
      ➙
    </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
