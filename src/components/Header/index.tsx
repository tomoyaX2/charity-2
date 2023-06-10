import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <Navbar className="w-full h-40 !bg-white flex items-center shadow-md">
        <img src={logo} alt="logo" className="w-[500px] h-32 mr-12" />
        <Nav>
          <Link to="/" className="mr-6" style={{ textDecoration: "none" }}>
            <span className="text-2xl text-black-100">Головна</span>
          </Link>
          <Link
            to="/about-us"
            className="mr-6 no-underline"
            style={{ textDecoration: "none" }}
          >
            <span className="text-2xl text-black-100">Про нас</span>
          </Link>
          <Link
            to="/documents"
            className="mr-6 no-underline"
            style={{ textDecoration: "none" }}
          >
            <span className="text-2xl text-black-100">Документи</span>
          </Link>
          <Link
            to="/contacts"
            className="mr-6 no-underline"
            style={{ textDecoration: "none" }}
          >
            <span className="text-2xl text-black-100">Контакти</span>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export { Header };
