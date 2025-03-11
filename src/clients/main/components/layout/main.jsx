import React, { useState } from "react";
import { FaMapSigns, FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import hero from "../../../../common/assets/images/main/hero.png";
import HeroSections from "../layout/hero";


export default function HomeHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <React.Fragment>
      <HeroSections />

      {/* About adiHutama Section */}
      <section className="px-4 py-16 bg-white hero sm:px-8">
        <div className="flex flex-col items-center justify-center mx-auto hero-content lg:flex-row max-w-7xl">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="w-full max-w-xs mb-8 rounded-lg shadow-2xl skeleton lg:max-w-sm lg:mb-0 lg:mr-16">
              <div className="h-48 bg-gray-300 rounded-lg animate-pulse lg:h-64" />
            </div>
          )}
          {/* Actual Image */}
          <img
            src={hero}
            className={`max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16 transition-opacity duration-300 bg-base-100 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt="adiHutama Logo"
            onLoad={handleImageLoad}
            loading="lazy" // Lazy load the logo image
          />
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-4xl font-bold text-blue-700 sm:text-5xl">
              We Develope Product That People Love to Use.
            </h2>
            <p className="max-w-2xl text-lg text-justify sm:text-xl">
              PT. Fahrul Monetta Paresa stands at the forefront of the IT
              consulting and business development industry in Indonesia, driven
              by a passion to provide transformational solutions to our clients.
              Since its inception, we have been dedicated to leveraging the
              power of technology to drive business growth, enabling
              organizations across various sectors to thrive in the digital age.
            </p>
            <div className="flex justify-center py-5 lg:justify-normal">
              <a
                href="#"
                className="px-8 py-3 font-semibold text-center text-white transition duration-300 bg-blue-700 rounded-full hover:bg-blue-900"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </React.Fragment>
  );
}
