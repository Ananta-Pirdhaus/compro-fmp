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
      <footer className="footer p-10 bg-white text-base-content mt-5">
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
            className="w-40 h-auto hidden lg:block"
            loading="lazy"
          />
        </div>

        {/* Grid Layout for Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          {/* Services Section */}
          <nav>
            <h3 className="footer-title text-gray-700 font-semibold mb-3">
              Our Services
            </h3>
            <ul>
              {Services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a className="link link-hover text-gray-600" href="#">
                    {service.serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products Section */}
          <nav>
            <h3 className="footer-title text-gray-700 font-semibold mb-3">
              Our Product
            </h3>
            <ul>
              {Product.map((product, index) => (
                <li key={index} className="mb-2">
                  <a className="link link-hover text-gray-600" href="#">
                    {product.productName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <nav>
            <h3 className="footer-title text-gray-800 font-semibold mb-3">
              Contact
            </h3>
            <ul>
              <li className="mb-4 flex items-center justify-center lg:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-gray-700"
                />
                <span className="text-gray-600">+6285819422449</span>
              </li>
              <li className="mb-4 flex items-center justify-center lg:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-gray-700"
                />
                <span className="text-gray-600">
                  fahrulmonetaparessa@gmail.com
                </span>
              </li>
              <li className="flex items-start justify-center lg:justify-start">
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
