import React from "react";
import heroImages from "../../../../common/assets/images/main/header.png";

export default function HeroSections() {
  return (
    <React.Fragment>
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 to-indigo-800">
        <div
          className="absolute inset-0 bg-center bg-cover brightness-50"
          style={{
            backgroundImage: `url('${heroImages}')`,
          }}
        ></div>

        <div className="container relative z-10 px-4 py-24 mx-auto md:py-36">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="w-full mb-12 md:mb-0">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-center md:text-6xl text-shadow md:text-left">
                Fahrul Moneta Paressa
              </h1>
              <p className="mb-8 text-xl font-medium text-center text-white md:w-1/2 md:text-left">
                Join FMP and enjoy an unparalleled experience through our
                superior and trusted services.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-5">
                <a
                  href="#"
                  className="px-8 py-3 font-semibold text-center text-blue-900 transition duration-300 border-2 rounded-full border-green-50 hover:border-white bg-green-50 hover:bg-blue-900 hover:text-white hover:border-2"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="px-8 py-3 font-semibold text-center text-white transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-blue-900"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
