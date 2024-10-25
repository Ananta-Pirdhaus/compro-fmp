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
      <section className="hero bg-white py-16 px-4 sm:px-8">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="skeleton w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16">
              <div className="animate-pulse bg-gray-300 h-48 lg:h-64 rounded-lg" />
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-700">
              We Develope Product That People Love to Use.
            </h2>
            <p className="text-lg sm:text-xl text-justify max-w-2xl">
              PT. Fahrul Monetta Paresa stands at the forefront of the IT
              consulting and business development industry in Indonesia, driven
              by a passion to provide transformational solutions to our clients.
              Since its inception, we have been dedicated to leveraging the
              power of technology to drive business growth, enabling
              organizations across various sectors to thrive in the digital age.
            </p>
            <div className="flex py-5">
              <a
                href="#"
                className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300 text-center"
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
