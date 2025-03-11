import React, { useState, useEffect } from "react";
import services from "../../../../common/assets/data/dummyServices"; // Adjust this path to where your `services` data is stored
import { FaMapSigns } from "react-icons/fa";

export default function ProductHero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Map through the `services` data
  const productTab = services.map((service) => ({
    icon: <FaMapSigns className="text-4xl" />,
    title: service.serviceName,
    description: service.description,
    harga: {
      usd: `USD ${service.price.usd.toLocaleString()}`,
    },
    durasi: service.duration,
    features: service.features.join(", "), // Join features as a comma-separated string
    gambar: service.image[0], // Access the first image
  }));

  return (
    <React.Fragment>
      <div className="bg-white ">
        <div className="flex flex-col items-center justify-between w-full py-10 mx-auto font-semibold max-w-7xl gap-x-5 md:flex-row">
          <h1 className="px-5 pb-3 text-4xl text-center text-blue-700 md:pb-0 md:text-right md:text-5xl md:px-0">
            We always provide the best service
          </h1>
          <div className="px-5 text-center md:text-left">
            <h2 className="text-xl md:text-2xl ">Services</h2>
            <p>
              We offer a wide range of IT and business solutions tailored to
              meet your unique requirements:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 md:p-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {productTab.map((service, index) => (
            <div
              key={index}
              className="transition-transform transform bg-white shadow-lg card hover:shadow-xl hover:scale-105"
            >
              <figure className="h-48 overflow-hidden md:h-60">
                <img
                  className="object-cover w-full h-full"
                  src={service.gambar}
                  alt={service.title}
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold card-title md:text-xl">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 md:text-base">
                  {service.description}
                </p>
                <div className="flex flex-col mt-4 space-y-2">
                  <div className="font-semibold text-gray-800">
                    {service.harga.usd}
                  </div>
                  <div className="text-gray-600">{service.durasi}</div>
                  <div className="text-gray-600">{service.features}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
