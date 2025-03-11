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
      <div className="mt-10 text-center md:mt-0"></div>
      {/* About adiHutama Section */}
      <section className="px-4 pb-16 bg-white hero sm:px-8">
        <div className="flex flex-col items-center justify-center mx-auto hero-content lg:flex-row max-w-7xl">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="w-full max-w-xs mb-8 rounded-lg shadow-2xl skeleton lg:max-w-sm lg:mb-0 lg:mr-16">
              <div className="h-48 bg-gray-300 rounded-lg animate-pulse lg:h-64" />
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
            <h2 className="pb-5 text-3xl font-bold text-blue-700 md:text-4xl lg:text-5xl">
              Our Teammate
            </h2>
            <p className="max-w-2xl text-lg text-justify sm:text-xl">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            {/* <p className="max-w-2xl py-2 text-lg text-justify sm:text-xl">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p> */}
            <div className="flex justify-center py-5 gap-x-5 lg:justify-normal">
              <a
                href="#"
                className="px-8 py-3 font-semibold text-center text-white transition duration-300 bg-blue-700 rounded-full hover:bg-blue-900"
              >
                View More
              </a>
              <a
                href="#"
                className="px-8 py-3 font-semibold text-center text-blue-900 transition duration-300 bg-white border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white"
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
