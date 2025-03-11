import React from "react";
import Wave from "../common/assets/images/Wave.svg"; // Pastikan path ini benar

export default function NewsLetter() {
  return (
    <React.Fragment>
      <section className="relative flex items-center justify-center overflow-hidden text-white bg-blue-900">
        {/* Mengganti elemen svg dengan img */}
        <img
          src={Wave}
          alt="Wave"
          className="absolute inset-x-0 bottom-0 z-20 w-full"
        />

        <div className="container relative z-10 px-4 py-24 mx-auto text-center md:py-32">
          <div className="w-full mx-auto mb-12 md:w-1/2 md:mb-0">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Join our newsletter to get the latest guides!
            </h1>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="px-8 py-3 font-semibold text-center text-blue-900 transition duration-300 rounded-full bg-green-50 hover:bg-blue-200"
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
      </section>
    </React.Fragment>
  );
}
