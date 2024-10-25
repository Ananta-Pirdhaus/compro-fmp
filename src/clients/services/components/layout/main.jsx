import React from "react";
import heroImages from "../../../../common/assets/images/main/header.png";

export default function HomeHero() {
  return (
    <React.Fragment>
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImages}')`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full text-center md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-4xl  font-bold mb-6 leading-tight">
                Unlock Your Business Potential with Cutting-Edge IT Solutions
              </h1>
              <p className="text-xl mb-8 font-medium text-white">
                Specialize in transforming your business with innovative IT
                strategies that drive success in the digital world.
              </p>
              <div className="flex justify-center items-center ">
                <a
                  href="#"
                  className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                >
                  Let's Transform Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
