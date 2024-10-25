import React, { useState, useEffect } from "react";
import paketWisata from "../../../../common/assets/data/dummyProduct";
import { useNavigate } from "react-router-dom";

export default function HomeHero() {
  const [loading, setLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [filteredPackages, setFilteredPackages] = useState(paketWisata);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const allPrices = paketWisata.flatMap((paket) =>
      paket.subPaket.map((sub) => sub.harga.idr)
    );
    const highestPrice = Math.max(...allPrices);
    const lowestPrice = Math.min(...allPrices);
    setMaxPrice(highestPrice);
    setMinPrice(lowestPrice);
    setPriceRange([lowestPrice, highestPrice]);
  }, []);

  useEffect(() => {
    const allLocations = [...new Set(paketWisata.map((paket) => paket.lokasi))];
    setLocations(allLocations);
  }, []);

  const handlePriceRangeChange = (e) => {
    const value = e.target.value;
    setPriceRange([minPrice, value]);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleFilterPackages = () => {
    const filtered = paketWisata
      .map((paket) => {
        const filteredSubPaket = paket.subPaket.filter(
          (sub) =>
            sub.harga.idr >= priceRange[0] &&
            sub.harga.idr <= priceRange[1] &&
            (selectedLocation === "" || paket.lokasi === selectedLocation)
        );
        return { ...paket, subPaket: filteredSubPaket };
      })
      .filter((paket) => paket.subPaket.length > 0);
    setFilteredPackages(filtered);
  };

  useEffect(() => {
    handleFilterPackages();
  }, [priceRange, selectedLocation]);

  const handleSelectPlan = (slug) => {
    const matchedPackage = paketWisata.find((paket) =>
      paket.subPaket.some((sub) => sub.slug === slug)
    );

    if (matchedPackage) {
      console.log("Paket ditemukan:", matchedPackage);
      navigate(`/paket-wisata/${slug}`);
      // Lakukan sesuatu setelah mencocokkan slug, seperti navigasi ke halaman detail atau lainnya.
    } else {
      console.log("Paket tidak ditemukan");
    }
  };

  return (
    <React.Fragment>
      <div className="text-center font-semibold py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          <span className="text-green-700 tracking-wide font-bold">
            Paket Wisata Kami
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-center p-8 md:p-10 lg:p-12 w-full">
        <div className="flex items-center">
          <input
            className="input input-bordered join-item text-base md:text-lg flex-grow"
            placeholder="Search"
          />
          <button className="btn join-item rounded-r-full text-base md:text-lg ml-2">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {/* Left Element */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-3 px-4 md:px-6 lg:px-12">
          <div className="flex flex-col gap-3 bg-base-100 border rounded-xl border-blue-200 p-5 w-full">
            {/* Price Range Filter */}
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Range Harga</h1>
              <label htmlFor="price-range" className="text-black">
                IDR {priceRange[0].toLocaleString()} - IDR{" "}
                {priceRange[1].toLocaleString()}
              </label>
              <input
                id="price-range"
                type="range"
                min={minPrice}
                max={maxPrice}
                step="10000"
                value={priceRange[1]}
                onChange={handlePriceRangeChange}
                className="w-full border border-green-200"
                aria-label="Price Range"
              />
              <div className="flex justify-between text-black">
                <span>IDR {minPrice.toLocaleString()}</span>
                <span>IDR {maxPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Filter Lokasi</h1>
              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                className="select select-bordered w-full"
              >
                <option value="">Semua Lokasi</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Highest and Lowest Price Checkbox */}
            <div className="flex flex-col gap-2">
              <label className="text-black">
                <input
                  type="checkbox"
                  onChange={() => setPriceRange([minPrice, maxPrice])}
                />{" "}
                Semua Harga
              </label>
              <label className="text-black">
                <input
                  type="checkbox"
                  onChange={() => setPriceRange([minPrice, minPrice])}
                />{" "}
                Harga Terendah
              </label>
              <label className="text-black">
                <input
                  type="checkbox"
                  onChange={() => setPriceRange([maxPrice, maxPrice])}
                />{" "}
                Harga Tertinggi
              </label>
            </div>
          </div>
        </div>

        {/* Right Element */}
        <div className="col-span-1 md:col-span-5 min-h-screen px-4 md:px-8 lg:px-12 flex items-center justify-center flex-col gap-8 md:gap-10">
          {filteredPackages.map((paket) => (
            <div key={paket.id} className="w-full">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-4 md:mb-6 lg:mb-8">
                {paket.namaPaket}
                <div className="border-b-4 pt-2 text-blue-600"></div>
              </h1>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {paket.subPaket.map((subPaket, subPaketIndex) => {
                  const cardClass =
                    subPaketIndex === 1
                      ? "bg-gray-900"
                      : "bg-white text-black";
                  const borderClass =
                    subPaketIndex === 1 ? "bg-green-500" : "bg-blue-500";

                  return (
                    <div
                      key={subPaket.id}
                      className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${cardClass}`}
                    >
                      <div className={`p-1 ${borderClass}`}></div>
                      <div className="p-4">
                        {loading ? (
                          <div className="flex flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                          </div>
                        ) : Array.isArray(subPaket.gambar) ? (
                          <div className="flex flex-wrap gap-4">
                            {subPaket.gambar.map((img, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`gambar ${imgIndex + 1}`}
                                className="w-full h-48 md:h-60 lg:h-72 object-cover mb-4 rounded-lg"
                                loading="lazy"
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={subPaket.gambar}
                            alt={subPaket.namaSubPaket}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        {loading ? (
                          <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                          </div>
                        ) : (
                          <>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                              {subPaket.namaSubPaket}
                            </h2>
                            <p className="text-lg text-gray-600">
                              IDR {subPaket.harga.idr.toLocaleString()}
                            </p>
                            <p className="text-gray-600 mt-2 text-justify">
                              {subPaket.deskripsi}
                            </p>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        {loading ? (
                          <div className="skeleton h-12 w-full"></div>
                        ) : (
                          <button
                            onClick={() => handleSelectPlan(subPaket.slug)}
                            className={`w-full rounded-full px-4 py-2 text-white focus:outline-none ${
                              subPaketIndex === 1
                                ? "bg-green-500 hover:bg-green-700 active:bg-green-800 text-base-100 hover:text-base-200 active:text-base-300"
                                : "bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-base-100 hover:text-base-200 active:text-base-300"
                            }`}
                          >
                            Lihat Selengkapnya
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
