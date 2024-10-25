import React, { useState } from "react";
import { FaMapSigns, FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import teamMate from "../../../../common/assets/images/team/teammate.png";
import HeroSections from "../layout/hero";

export default function TeaMate() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <React.Fragment>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700">
          Our Teammate
        </h2>
      </div>
      {/* About adiHutama Section */}
      <section className="hero bg-white pb-16 px-4 sm:px-8">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="skeleton w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16">
              <div className="animate-pulse bg-gray-300 h-48 lg:h-64 rounded-lg" />
            </div>
          )}
          {/* Actual Image */}
          <img
            src={teamMate}
            className={`max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16 transition-opacity duration-300 bg-base-100 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt="adiHutama Logo"
            onLoad={handleImageLoad}
            loading="lazy" // Lazy load the logo image
          />
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl text-justify max-w-2xl">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p className="text-lg sm:text-xl text-justify max-w-2xl py-2">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex py-5 gap-x-5">
              <a
                href="#"
                className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300 text-center"
              >
                View More
              </a>
              <a
                href="#"
                className="bg-white text-blue-800 border border-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-center"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
