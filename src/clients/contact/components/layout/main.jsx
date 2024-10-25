import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactSection = () => {
  return (
    <section className="text-gray-600 body-font bg-orange-100">
      <div
        className="container flex gap-5 flex-col p-5 md:flex-row-reverse lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
        id="contact-form"
      >
        <div className="md:w-1/3 w-full bg-white p-5">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
            Contact Us
          </h1>

          {/* Icons for Phone, Email, and Maps */}
          <div className="flex items-center mb-4">
            <a
              href="tel:+1234567890"
              className="mr-4 text-gray-500 hover:text-gray-900"
            >
              <i className="fas fa-phone-alt fa-lg"></i>
            </a>
            <a
              href="mailto:contact@example.com"
              className="mr-4 text-gray-500 hover:text-gray-900"
            >
              <i className="fas fa-envelope fa-lg"></i>
            </a>
            <a
              href="https://www.google.com/maps"
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="fas fa-map-marker-alt fa-lg"></i>
            </a>
          </div>

          <p className="leading-relaxed text-xl text-gray-900">
            We're here to assist you! If you have any questions or need
            assistance, please feel free to reach out to us.
            <br />
            <br />
            You can also email us at
            <a
              href="mailto:contact@example.com"
              className="font-semibold border-b-4 border-green-400"
            >
              contact@example.com
            </a>
          </p>

          <p className="leading-relaxed text-xl text-gray-900 mt-8">
            Connect with us on social media:
          </p>

          {/* Social Media Cards */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border  bg-blue-700 text-white rounded-2xl p-4 text-center hover:bg-gray-100">
                <i className="fab fa-linkedin fa-lg mx-auto"></i>
              </div>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border  bg-blue-700 text-white rounded-2xl p-4 text-center hover:bg-gray-100">
                <i className="fab fa-instagram fa-lg mx-auto"></i>
              </div>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border  bg-blue-700 text-white rounded-2xl p-4 text-center hover:bg-gray-100">
                <i className="fab fa-facebook fa-lg mx-auto"></i>
              </div>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border  bg-blue-700 text-white rounded-2xl p-4 text-center hover:bg-gray-100">
                <i className="fab fa-twitter fa-lg mx-auto"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:p-5 bg-white">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
            Contact Form
          </h1>
          <form
            action="send-contact.php"
            method="post"
            id="submit-contact-form"
          >
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
              >
                Send Message ✉
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
