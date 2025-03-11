import React from "react";
import logoMiniResponsive from "./assets/images/Logo_FMP_Responsive.png";
import Product from "../common/assets/data/dummyProduct";
import Services from "../common/assets/data/dummyServices";
import logoLarge from "./assets/images/Logo_FMP_large.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="flex flex-col items-center px-10 py-10 mt-5 bg-white lg:flex-row lg:items-start gap-x-10">
        {/* Logo Section */}
        <div className="mb-6 text-center lg:text-left">
          <img
            src={logoMiniResponsive}
            alt="Logo AdiHutama Responsive"
            className="w-32 h-auto mx-auto lg:hidden"
            loading="lazy"
          />
          <img
            src={logoLarge}
            alt="Logo AdiHutama Large"
            className="hidden h-auto w-96 lg:block"
            loading="lazy"
          />
          <p className="w-full md:w-96">{`PT. Fahrul Monetta Paresa leads Indonesia's IT consulting and business development industry, empowering businesses with transformative digital solutions.`}</p>
        </div>

        {/* Grid Layout for Content Sections */}
        <div className="grid items-center justify-center grid-cols-1 gap-8 text-center lg:grid-cols-[4fr_2.5fr_4.5fr] lg:text-left md:items-start">
          {/* Services Section */}
          <nav>
            <h3 className="mb-3 font-extrabold text-blue-950 footer-title">
              Our Services
            </h3>
            <ul>
              {Services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a className="text-gray-600 link link-hover" href="#">
                    {service.serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products Section */}
          <nav>
            <h3 className="mb-3 font-extrabold text-blue-950 footer-title">
              Our Product
            </h3>
            <ul>
              {Product.map((product, index) => (
                <li key={index} className="mb-2">
                  <a className="text-gray-600 link link-hover" href="#">
                    {product.productName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <nav>
            <h3 className="mb-3 font-extrabold text-blue-950 footer-title">
              Contact
            </h3>
            <ul>
              <li className="flex items-center justify-center mb-4 lg:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-gray-700"
                />
                <span className="text-gray-600">+6285819422449</span>
              </li>
              <li className="flex items-center justify-center mb-4 lg:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-gray-700"
                />
                <span className="text-gray-600">
                  fahrulmonetaparessa@gmail.com
                </span>
              </li>
              <li className="flex items-center justify-center md:items-start lg:justify-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-gray-700"
                />
                <span className="text-gray-600 whitespace-break-spaces">
                  Jl. Daan Mogot II No.Kav. 4-5, RT.10/RW.1, Kedoya Utara, Kec.
                  Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
                  11520
                  <br />
                  Centro City Residence
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </React.Fragment>
  );
}
