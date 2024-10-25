import React, { useState, useEffect } from "react";
import services from "../../../../common/assets/data/dummyServices"; // Adjust this path to where your `services` data is stored
import { FaMapSigns } from "react-icons/fa";

export default function ServicesList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Map through the `services` data
  const serviceTab = services.map((service) => ({
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
      <div className="bg-white">
        <div className="flex items-center justify-center text-center font-semibold py-10 mx-auto w-full max-w-7xl">
          <h1 className="text-4xl md:text-5xl text-blue-700">Our Services</h1>
        </div>
        <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceTab.map((service, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <figure className="h-48 md:h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={service.gambar}
                  alt={service.title}
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg md:text-xl font-bold">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
                <div className="flex flex-col mt-4 space-y-2">
                  <div className="text-gray-800 font-semibold">
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
