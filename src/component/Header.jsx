import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import "../styles/Header.css";
const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleNav = () => {
    console.log("clicked");
    setIsNavOpened((prevState) => !prevState);
    console.log(isNavOpened);
  };
  
  window.onscroll =(e)=>{
    window.scrollY > 0 && setIsScrolled(!isScrolled)
    window.scrollY == 0 && setIsScrolled(!isScrolled);
  }
    //  setIsScrolled((prevState) => !prevState);
     


  return (
    <div className="header">
      <div className="top-header-section flex items-center justify-between max-w-screen-xl mx-auto py-3">
        <div className="class">
          <div className="flex items-center gap-2">
            <AiOutlinePhone />
            <p>354215251</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <p>materialworldd@gmail.com</p>
        </div>
      </div>
      <div
        className={`bg-black ${
          isScrolled
            ? ""
            : ""
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6 px-5  text-white">
          <Link to="/" className="font-heading text-2xl font-bold">
            Material World
          </Link>
          <div className="flex gap-3">
            <ul
              className={`md:flex md:relative md:p-0 items-center md:space-x-8 absolute bg-black p-5 sm:w-[50vw] z-[2222222222]   xs:left-[-1000%] hidden top-[30%] ${
                isNavOpened ? "myNav" : "defaultNav"
              }`}
            >
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/Politics">Politics</Link>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
              </li>
              <li>
                <Link to="/Health">Health</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
            <button className="md:hidden" onClick={handleNav}>
              <BiMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
