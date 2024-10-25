import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FaMapSigns,
  FaPaperPlane,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const CONTACT_DETAILS = [
  {
    icon: <FaMapSigns className="text-4xl" />,
    title: "Alamat",
    description:
      "Jl.Ikan Piranha Atas No.220 Kav.9, Tunjungsekar, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142",
    href: "https://maps.app.goo.gl/G27uzZeUSffbmzYM9",
  },
  {
    icon: <BsFillTelephoneFill className="text-4xl" />,
    title: "Nomor Telepon",
    description: "+6282122050805",
    href: `https://wa.me/${"+6282122050805".replace(/[^\d+]/g, "")}`,
  },
  {
    icon: <FaPaperPlane className="text-4xl" />,
    title: "Alamat Email",
    description: "radiuseko@gmail.com",
    href: "mailto:radiuseko@gmail.com",
  },
  {
    icon: <FaInstagram className="text-4xl" />,
    title: "Instagram",
    description: "@eowisatamalang",
    href: "https://www.instagram.com/eowisatamalang/?hl=id",
  },
  {
    icon: <FaYoutube className="text-4xl" />,
    title: "Youtube",
    description: "@eowisatamalang",
    href: "https://www.youtube.com/@eowisatamalang",
  },
];

const ContactCard = ({ icon, title, description, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card w-full shadow-xl h-auto cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-base-100"
  >
    <div className="card-body items-center flex-grow-0 text-center">
      <h2 className="card-title">{icon}</h2>
      <p className="text-lg font-bold my-3">{title}</p>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  </a>
);

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <React.Fragment>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
       
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-red-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
