import React from "react";
import NewsLetter from "../../../../common/email";
import CEO from "../../../../common/assets/images/team/CEO.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Muh. Fahrul, B. Sc",
    role: "Director",
    imgSrc: CEO,
  },
  {
    id: 2,
    name: "Jonathan Benedict",
    role: "Operational Manager",
    imgSrc:
      "https://th.bing.com/th/id/OIP.NfNA47Z2MfhgX6RWIUtqKgHaHa?rs=1&pid=ImgDetMain",
  },
];

const OurTeam = () => {
  return (
    <section id="our-team" className="bg-white py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <img
                src={member.imgSrc}
                alt={`Team Member ${member.id}`}
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomeHero() {
  return (
    <React.Fragment>
      <div className="container px-6 py-16 mx-auto text-justify">
        <div className="w-full mx-auto overflow-hidden bg-blue-700 p-5 rounded-xl">
          <h1 className="text-xl font-normal text-white lg:text-2xl">
            PT. Fahrul Monetta Paresa is at the forefront of the IT consulting
            and business development industry in Indonesia. Driven by a passion
            to create transformational solutions, we have empowered businesses
            across various sectors to thrive in the digital age.
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>

        {/* Card About */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
          <a
            href="#"
            className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 border border-blue-200 rounded-full shadow-inner lg:h-20 lg:w-20">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="mb-3 text-xl font-bold lg:text-2xl">Our Vision</h5>
              <p className="mb-6 text-lg text-gray-600">
                To become the leading partner in digital transformation and
                business development for companies both in Indonesia and
                globally, while creating sustainable value through technological
                innovation.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 border border-blue-100 rounded-full shadow-inner lg:h-20 lg:w-20">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                Our Mission
              </h5>
              <ul className="mb-6 text-lg text-gray-600 list-disc">
                <li>Empowering Business Growth</li>
                <li>Delivering World-Class Solutions</li>
                <li>Creating Significant Added Value</li>
                <li>Becoming a Trusted Strategic Partner</li>
                <li>Innovating Continuously</li>
                <li>Driving Employee Skills and Development</li>
              </ul>
            </div>
          </a>
        </div>

        {/* Our Team */}
        <OurTeam />
      </div>
      <NewsLetter />
    </React.Fragment>
  );
}
