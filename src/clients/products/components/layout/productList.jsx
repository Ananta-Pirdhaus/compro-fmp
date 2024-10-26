import React, { useState, useEffect } from "react";
import product from "../../../../common/assets/data/dummyProduct";
import { FaMapSigns } from "react-icons/fa";

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const productTab = product.map((products) => ({
    icon: <FaMapSigns className="text-4xl" />,
    title: products.productName,
    description: products.description,
    gambar: products.image,
  }));

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="flex items-center justify-center text-center font-semibold py-10 mx-auto w-full max-w-7xl">
          <h1 className="text-4xl md:text-5xl text-blue-700">Our Product</h1>
        </div>
        <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {productTab.map((products, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 relative" // Added 'relative' class
            >
              <figure className="h-48 md:h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={products.gambar}
                  alt={products.title}
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg md:text-xl font-bold">
                  {products.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {products.description}
                </p>
                {/* Button placed here, below the description */}
                <button className="mt-4 w-1/2 md:w-full sm:w-full lg:w-1/2 border-gray-900 border bg-white text-gray-800 py-2 px-4 rounded transition duration-200 hover:bg-blue-800 hover:text-white active:bg-blue-800 active:text-white">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
