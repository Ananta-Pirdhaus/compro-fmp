import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactSection = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-16 text-white bg-blue-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-12 bg-orange-50">
        <div className="container flex flex-col items-stretch justify-center mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          {/* Form Area */}
          <div className="flex flex-col w-full p-8 bg-white rounded shadow-lg md:w-1/2">
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-orange-500">
                \ Get In Touch \
              </h3>
              <h1 className="mb-6 text-3xl font-bold text-blue-900">
                {`Hey! Let's Talk`}
              </h1>
            </div>

            <form className="flex-grow space-y-4">
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
                className="w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between w-full p-8 bg-white rounded shadow-lg md:w-1/3">
            <div>
              <div className="mb-6">
                <h3 className="flex items-center mb-2 text-lg font-semibold text-blue-900">
                  <i className="mr-3 text-blue-500 fas fa-phone-alt"></i> Call
                  Anytime
                </h3>
                <p className="text-gray-600">+62 858 1942 2449</p>
              </div>
              <div className="mb-6">
                <h3 className="flex items-center mb-2 text-lg font-semibold text-blue-900">
                  <i className="mr-3 text-blue-500 fas fa-envelope"></i> Send
                  Email
                </h3>
                <p className="text-gray-600">fahrulmonetaparessa@gmail.com</p>
              </div>
              <div className="mb-6">
                <h3 className="flex items-center mb-2 text-lg font-semibold text-blue-900">
                  <i className="mr-3 text-blue-500 fas fa-map-marker-alt"></i>{" "}
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  JL Daan Mogot II No. Kav. 4-5 Kedoya Utara, Jakarta Barat
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-900">
                Follow us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full"
                >
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
