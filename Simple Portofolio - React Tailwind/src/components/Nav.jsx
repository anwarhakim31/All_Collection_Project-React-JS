import React from "react";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <>
      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="home"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          Home
        </Link>
      </li>
      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="about"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          About
        </Link>
      </li>

      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="project"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          Project
        </Link>
      </li>
      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="client"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          Client
        </Link>
      </li>
      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="blog"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          Blog
        </Link>
      </li>
      <li className=" lg:navbar-effect  hover:text-primary">
        <Link
          to="contact"
          smooth={true}
          spy={true}
          className="cursor-pointer font-semibold"
        >
          Contact
        </Link>
      </li>
    </>
  );
};
