import React from "react";
import Wave from "../common/assets/images/Wave.svg"; // Pastikan path ini benar

export default function NewsLetter() {
  return (
    <React.Fragment>
      <section className="relative bg-blue-900 text-white overflow-hidden flex justify-center items-center">
        {/* Mengganti elemen svg dengan img */}
        <img
          src={Wave}
          alt="Wave"
          className="absolute inset-x-0 bottom-0 w-full z-20"
        />

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <div className="w-full md:w-1/2 mx-auto mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl  font-bold mb-6 text-white leading-tight">
              Join our newsletter to get the latest guides!
            </h1>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
      </section>
    </React.Fragment>
  );
}
