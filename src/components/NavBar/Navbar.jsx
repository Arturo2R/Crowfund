import React from "react";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex">
        <div className="w-[50%]">
          <img src="" alt="Crowfund" id="logo" />
        </div>
        <ul className="flex">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
