import React from "react";
import logoMiniResponsive from "./assets/images/Logo_FMP_Responsive.png";
import logoLarge from "./assets/images/Logo_FMP_large.png";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer p-10 bg-white text-base-content mt-5">
        <nav className="mb-4">
          {/* Logo for small and medium screens */}
          <img
            src={logoMiniResponsive}
            alt="Logo AdiHutama Responsive"
            className="w-40 h-auto block lg:hidden"
            loading="lazy"
          />
          {/* Logo for large screens */}
          <img
            src={logoLarge}
            alt="Logo AdiHutama Large"
            className="w-40 h-auto hidden lg:block"
            loading="lazy"
          />
        </nav>
        <nav>
          <h3 className="footer-title text-gray-700 font-semibold">Layanan</h3>{" "}
          {/* Changed from h6 to h3 */}
          <ul>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Paket Family Trip
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Paket Outing Kantor
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Paket Family Gathering
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Paket Customer Gathering
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="footer-title text-gray-700 font-semibold">
            Perusahaan
          </h3>{" "}
          {/* Changed from h6 to h3 */}
          <ul>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Tentang Kami
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Hubungi Kami
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Karir
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Media Kit
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="footer-title text-gray-800 font-semibold">Legal</h3>{" "}
          {/* Changed from h6 to h3 */}
          <ul>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Syarat dan Ketentuan
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Kebijakan Privasi
              </a>
            </li>
            <li className="mb-2">
              <a className="link link-hover" href="#">
                Kebijakan Cookie
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </React.Fragment>
  );
}
