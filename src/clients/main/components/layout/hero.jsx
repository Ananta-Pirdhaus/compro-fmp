import React from "react";
import heroImages from "../../../../common/assets/images/main/header.png";

export default function HeroSections() {
  return (
    <React.Fragment>
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImages}')`,
          }}
        ></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl text-shadow font-bold mb-6 leading-tight">
                Fahrul Moneta Paressa
              </h1>
              <p className="text-xl mb-8 font-medium text-white">
                Bergabunglah dengan FMP dan nikmati pengalaman yang
                tak tertandingi melalui layanan kami yang superior dan
                terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="bg-green-50 text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
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
