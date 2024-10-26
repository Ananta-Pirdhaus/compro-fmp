import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoMiniResponsive from "./assets/images/Logo_FMP_Responsive.png";
import logoLarge from "./assets/images/Logo_FMP_large.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isNavigate = useNavigate();

  const handleContactRedirect = () => {
    isNavigate("/contact-us");
  };

  const handleNavbarClick = (navbarName) => {
    setActiveNavbar(navbarName);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderNavLinks = () => {
    return (
      <>
        <li>
          <NavLink
            to="/"
            className={`font-semibold ${
              activeNavbar === "home" ? "bg-danger" : ""
            }`}
            onClick={() => handleNavbarClick("home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={`font-semibold ${
              activeNavbar === "about-us" ? "bg-danger" : ""
            }`}
            onClick={() => handleNavbarClick("about-us")}
          >
            About Us
          </NavLink>
        </li>
        {/* Dropdown untuk "Services" */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost font-semibold"
            onClick={() => handleNavbarClick("services")}
          >
            Services
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/services"
                onClick={() => handleNavbarClick("services")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                onClick={() => handleNavbarClick("product")}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <li>
          <NavLink
            to="/insight"
            className={`font-semibold ${
              activeNavbar === "insight" ? "bg-danger" : ""
            }`}
            onClick={() => handleNavbarClick("insight")}
          >
            Insights
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <React.Fragment>
      <div className="sticky top-0 z-50 bg-base-100 flex items-center justify-between px-4 h-20">
        <NavLink
          to="/"
          className="font-bold text-green-400"
          onClick={() => handleNavbarClick("home")}
        >
          <div className="items-center">
            {/* Logo untuk medium hingga large */}
            <img
              src={logoLarge}
              alt="Logo Large"
              className="hidden md:w-32 md:h-32 md:block lg:block lg:w-40 lg:h-16"
              loading="lazy"
            />
            {/* Logo untuk tampilan mobile */}
            <img
              src={logoMiniResponsive}
              alt="Logo Mini Responsive"
              className="block md:hidden h-16 w-24"
              loading="lazy"
            />
          </div>
        </NavLink>

        <ul className="menu menu-horizontal top-0 hidden lg:flex items-center space-x-4">
          {renderNavLinks()}
        </ul>

        <div className="lg:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {renderNavLinks()}
              <li>
                <button
                  className="bg-blue-900 text-base-100 w-full mt-2 rounded-full"
                  onClick={handleContactRedirect}
                >
                  <span className="text-white">Contact Us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex">
          <button
            className="btn bg-blue-900 hover:bg-blue-950 text-base-100 rounded-full"
            onClick={handleContactRedirect}
          >
            <span className="text-white">Contact Us</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
