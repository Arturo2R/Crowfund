import React from "react";
import { Link } from "react-router-dom";
import ModalMenu from "../modals/ModalMenu";
import Hambur from "/src/images/icon-hamburger.svg";
import Logo from "/src/images/logo.svg";
const Navbar = () => {
  return (
    <header className="w-full bg-transparent z-10 relative bg-blend-overlay">
      <nav className="flex justify-between px-8 py-9 md:px-36 md:py-9">
        <div className="md:w-50 w-32">
          <Link to="/">
            <img src={Logo} alt="Crowfund" id="logo" />
          </Link>
        </div>
        <ul className="space-x-10  text-white hidden md:flex">
          <Link to="about">About</Link>
          <Link to="discover">Discover</Link>
          <Link to="get-started">Get Started</Link>
        </ul>
        <div className="block md:hidden">
          <ModalMenu links={["about", "conocenos", "vamos a bailar"]}>
            <img src={Hambur} alt="kjkj" />
          </ModalMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
