import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoMiniResponsive from "./assets/images/Logo_FMP_Responsive.png";
import logoLarge from "./assets/images/Logo_FMP_large.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isNavigate = useNavigate();
  const [isOpenOfferings, setIsOpenOfferings] = useState(false);

  const handleContactRedirect = () => {
    isNavigate("/contact-us");
  };

  const handleNavbarClick = (navbarName) => {
    setActiveNavbar(navbarName);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpenOfferings(false);
  };

  const handleOpenOfferingsClick = (e) => {
    e.stopPropagation();
    handleNavbarClick("offerings");
    setIsOpenOfferings(!isOpenOfferings);
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
        {/* Dropdown untuk "Offerings" */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={`font-semibold btn btn-ghost`}
            onClick={handleOpenOfferingsClick}
          >
            Offerings
          </div>
          {isOpenOfferings && (
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
          )}
        </div>
        <li>
          <NavLink
            to="/blog"
            className={`font-semibold ${
              activeNavbar === "blog" ? "bg-danger" : ""
            }`}
            onClick={() => handleNavbarClick("blog")}
          >
            Blog
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <React.Fragment>
      <div className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 bg-base-100">
        {/* Logo Company */}
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
              className="hidden h-auto md:block lg:block md:w-80"
              loading="lazy"
            />
            {/* Logo untuk tampilan mobile */}
            <img
              src={logoMiniResponsive}
              alt="Logo Mini Responsive"
              className="block w-24 h-16 md:hidden"
              loading="lazy"
            />
          </div>
        </NavLink>

        {/* List Desktop */}
        <ul className="top-0 items-center hidden space-x-4 menu menu-horizontal lg:flex">
          {renderNavLinks()}
        </ul>

        {/* List Mobile */}
        <div className="lg:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                  className="w-full mt-2 bg-blue-900 rounded-full text-base-100"
                  onClick={handleContactRedirect}
                >
                  <span className="text-white">Contact Us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Desktop */}
        <div className="hidden lg:flex">
          <button
            className="px-10 bg-blue-900 rounded-full btn hover:bg-blue-950 text-base-100"
            onClick={handleContactRedirect}
          >
            <span className="text-white">Contact Us</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
