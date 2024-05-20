import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { MdClose, MdGpsFixed } from "react-icons/md";
import { Nav } from "./Nav";

export const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const header = document.querySelector("header");

  window.onscroll = () => {
    const scrollposition = window.scrollY;

    if (scrollposition > window.innerHeight * 0.01) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  console.log(isScroll);

  const handleNavbar = () => {
    setIsopen(!isOpen);
  };

  return (
    <header
      className={`fixed z-10 w-full top-0 left-0 flex items-center p-4   backdrop-blur  border-slate-900 
      ${isScroll ? "shadow-sm shadow-slate-500" : ""} 
      ${
        isOpen
          ? "bg-white lg:bg-transparent shadow-sm shadow-slate-500"
          : "bg-transparant"
      }`}
    >
      <div className="container ">
        <div className="flex justify-between  flex-wrap lg-wrap items-center px-4">
          <div className="logo">
            <Link
              to="home"
              className="text-primary font-semibold cursor-pointer"
            >
              Anwar Hakim.
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="primary-navigation  flex gap-6">
              <Nav />
            </ul>
          </nav>
          {isOpen && (
            <nav className="order-3 w-full lg:hidden pt-4 transition-all duration-200">
              <ul className="primary-navigation flex-col justify-center items-center flex gap-6">
                <Nav />
              </ul>
            </nav>
          )}

          <button
            className="lg:hidden text-xl text-slate-800 order-2"
            onClick={handleNavbar}
          >
            {isOpen ? <MdClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};
