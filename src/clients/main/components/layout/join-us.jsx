import React from "react";
import Joinus from "../../../../common/assets/images/join-us.png"; // Ensure path is correct

export default function JoinUs() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center px-4 py-8 bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:max-w-5xl xl:max-w-6xl bg-blue-800 shadow-lg overflow-hidden sm:rounded-xl md:rounded-lg lg:rounded-r-full lg:rounded-l-full">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <img
              className="max-w-full max-h-80 object-cover"
              src={Joinus}
              alt="Descriptive alt text for the image"
            />
          </div>
          <div className="flex flex-col p-6 md:px-12  lg:pl-8 lg:pr-10">
            <h2 className="text-2xl uppercase text-white font-bold lg:text-3xl">
              Scale up your company with us!
            </h2>
            <p className="mt-4 text-white text-sm md:text-base lg:text-lg">
              Together, we’ll create a stronger, more agile team that’s fully
              equipped to tackle any business challenge that comes their way.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="rounded-xl inline-block w-full text-center text-lg font-medium text-gray-100 bg-orange-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-orange-800 hover:shadow-md md:w-auto"
              >
                Join Us!
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
