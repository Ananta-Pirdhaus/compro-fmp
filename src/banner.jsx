import React, { useState } from "react";
import logoMiniResponsive from "./common/assets/images/logo-transparent.png";
import { FaWhatsapp } from "react-icons/fa";

function Banner() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsChatOpen(false);
      setIsAnimating(false);
    }, 300); // Adjust this duration to match your animation
  };

  return (
    <React.Fragment>
      <div className="fixed rounded-full shadow-xl bottom-8 right-7 w-auto md:bottom-8 md:right-12 md:w-auto z-50">
        <div
          className="bg-blue-500 hover:bg-blue-700 border border-transparent rounded-full text-gray-50 lg:text-lg md:text-sm p-3 md:rounded-full shadow-lg flex cursor-pointer"
          onClick={toggleChat}
        >
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-15 lg:h-15"
            >
              <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      {isChatOpen && (
        <div
          id="chat-container"
          className={`fixed bottom-24 right-2 max-w-xs md:bottom-32 md:right-8 lg:bottom-36 lg:right-12 lg:w-96 xl:w-96 md:w-96 chat-appear z-50 ${
            isAnimating ? "chat-disappear" : ""
          }`}
        >
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-green-500 text-white rounded-t-lg flex items-center">
              <img
                src={logoMiniResponsive}
                alt="Logo"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 mr-3 bg-white rounded-lg"
              />
              <p className="text-sm md:text-lg font-semibold flex-grow">
                Adihutama Travel
              </p>
              <button
                id="close-chat"
                className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100"
                onClick={closeChat}
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Chat */}
            <div className="p-5">
              <a
                href="https://wa.me/+6282122050805" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full">
                      <FaWhatsapp size={30} color="green" />
                    </div>
                  </div>
                  <div className="chat-bubble bg-blue-500 hover:bg-blue-700 text-white">
                    <p className="font-semibold">Admin 1</p>
                    <p className="text-sm">+6282122050805</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Banner;
