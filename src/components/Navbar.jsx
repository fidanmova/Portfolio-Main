import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "40px " }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
        </Link>
        </li>
        <li>   <Link to='about' smooth={true} duration={500}>
            About
          </Link></li>
        <li> <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
        <li> <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link></li>
        <li>  <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      {/* if opposite ov nav is false, then it's true, which means nav must be hidden (for big screens), otherwise set as we style for small displays */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
        </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[180px] h-[80px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/fidandev/"
            >
              {" "}
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[80px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/fidanmova"
            >
              {" "}
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[80px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/fidanmova"
            >
              {" "}
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[180px] h-[80px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 bg-pink-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/fidanmova"
            >
              {" "}
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
