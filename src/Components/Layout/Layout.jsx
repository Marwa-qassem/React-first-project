import React from "react";
// import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

export default function Layout() {
  return (
    <>
      <NavBar />
      {/* <Outlet></Outlet> */}
      <Home/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </>
  );
}
