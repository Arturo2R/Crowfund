import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
