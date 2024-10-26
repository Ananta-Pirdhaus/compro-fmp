import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactSection = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-red-500">Contact Us</h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-orange-50 py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Form Area */}
          <div className="w-full md:w-1/2 bg-white rounded shadow-lg p-8 flex flex-col">
            <div className="text-center">
              <h3 className="text-orange-500 text-xl font-bold mb-2">
                \ Get In Touch \
              </h3>
              <h1 className="text-3xl font-bold text-blue-900 mb-6">
                Hey! Let's Talk
              </h1>
            </div>
            
            <form className="space-y-4 flex-grow">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 bg-white rounded shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 flex items-center mb-2">
                  <i className="fas fa-phone-alt text-blue-500 mr-3"></i> Call
                  Anytime
                </h3>
                <p className="text-gray-600">+62 858 1942 2449</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 flex items-center mb-2">
                  <i className="fas fa-envelope text-blue-500 mr-3"></i> Send
                  Email
                </h3>
                <p className="text-gray-600">fahrulmonetaparessa@gmail.com</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 flex items-center mb-2">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-3"></i>{" "}
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  JL Daan Mogot II No. Kav. 4-5 Kedoya Utara, Jakarta Barat
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Follow us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
