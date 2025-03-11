import React from "react";
import Joinus from "../../../../common/assets/images/join-us.png"; // Ensure path is correct

export default function JoinUs() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full px-4 py-8 bg-white">
        <div className="flex flex-col w-full overflow-hidden bg-blue-800 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:max-w-5xl xl:max-w-6xl sm:rounded-xl md:rounded-lg lg:rounded-2xl">
          <div className="flex items-center justify-center w-full p-4 lg:w-1/2">
            <img
              className="object-cover max-w-full max-h-80"
              src={Joinus}
              alt="Descriptive alt text for the image"
            />
          </div>
          <div className="flex flex-col p-6 md:px-12 lg:pl-8 lg:pr-10">
            <h2 className="text-2xl font-bold text-white uppercase lg:text-3xl">
              Scale up your company with us!
            </h2>
            <p className="mt-4 text-sm text-white md:text-base lg:text-lg">
              Together, we’ll create a stronger, more agile team that’s fully
              equipped to tackle any business challenge that comes their way.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block w-full px-10 py-4 text-lg font-medium text-center text-gray-100 bg-orange-600 border-2 border-gray-600 border-solid rounded-xl hover:bg-orange-800 hover:shadow-md md:w-auto"
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
