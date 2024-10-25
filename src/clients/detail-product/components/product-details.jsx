import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PaketLainnya from "./another-product";
import PaketWisata from "../../../common/assets/data/dummyProduct";

const ParentComponent = () => {
  const { slug } = useParams(); // Get slug from URL parameters
  const navigate = useNavigate();
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [modalData, setModalData] = useState({
    nama: "",
    pax: "",
    paket: "",
    jenis: "",
  });

  useEffect(() => {
    // Set initial selected paket based on slug
    const matchedPackage = PaketWisata.flatMap((paket) => paket.subPaket).find(
      (sub) => sub.slug === slug
    );

    if (matchedPackage) {
      setSelectedPaket(matchedPackage);
    } else {
      console.log("Paket tidak ditemukan");
    }
  }, [slug]);

  const handlePaketSelect = (newSlug) => {
    navigate(`/paket-wisata/${newSlug}`); // Update URL
    const matchedPackage = PaketWisata.flatMap((paket) => paket.subPaket).find(
      (sub) => sub.slug === newSlug
    );

    if (matchedPackage) {
      setSelectedPaket(matchedPackage);
    } else {
      console.log("Paket tidak ditemukan");
    }
  };

  const getFilteredPackages = () => {
    if (!selectedPaket) return [];

    return PaketWisata.map((paket) => ({
      ...paket,
      subPaket: paket.subPaket.filter((sub) => sub.slug !== selectedPaket.slug),
    })).filter((paket) => paket.subPaket.length > 0);
  };

  const filteredPackages = getFilteredPackages();

  const openModal = () => {
    setModalData({
      nama: "", // Set empty or initial value
      pax: "", // Set empty or initial value
      paket: selectedPaket?.namaSubPaket || "", // Use selectedPaket.namaSubPaket
    });
    document.getElementById("my_modal_3").showModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Januari adalah 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "+6282122050805"; // Ganti dengan nomor WhatsApp yang sesuai
    const message =
      `---AdiHutama Tour & Travel---\n` +
      `Tanggal Pemesanan: ${getCurrentDate()}\n` +
      `Nama Paket: ${modalData.paket}\n` +
      `Nama Pemesan: ${modalData.nama}\n` +
      `Jumlah Pax: ${modalData.pax}\n` +
      `------Terimakasih------`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <React.Fragment>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              {selectedPaket && (
                <>
                  <img
                    src={selectedPaket.gambar ? selectedPaket.gambar[0] : ""}
                    alt={selectedPaket.namaSubPaket || ""}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                    loading="lazy"
                    fetchpriority="high"
                    width={600} // Set a specific width if possible
                    height={400} // Set a specific height if possible
                  />
                  <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                    {selectedPaket.thumbnailImages?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        loading="lazy"
                        alt={`Thumbnail ${index + 1}`}
                        className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onClick={() =>
                          setSelectedPaket((prev) => ({
                            ...prev,
                            gambar: [img],
                          }))
                        }
                        width={100} // Set a specific width for thumbnails
                        height={100} // Set a specific height for thumbnails
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              {selectedPaket && (
                <>
                  <h2 className="text-3xl font-bold mb-2 text-green-600">
                    {selectedPaket.namaSubPaket || ""}
                  </h2>
                  <div className="mb-4">
                    <span className="text-2xl font-medium mr-2 text-blue-600">
                      Rp {selectedPaket.harga?.idr?.toLocaleString() || "0"}
                    </span>
                  </div>
                  <div className="my-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    <button
                      onClick={openModal}
                      className="text-xl text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg py-2.5 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center bg-green-500 p-2 hover:bg-green-700"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="mr-2 text-green-20 w-8"
                        fill="white"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      Pesan Paket Wisata
                    </button>
                  </div>
                  {/* Fasilitas */}
                  <ul className="mb-4">
                    <h1 className="text-2xl font-bold mb-2">Fasilitas</h1>
                    <div className="flex">
                      <div className="w-1/2">
                        {selectedPaket.fasilitas
                          .slice(
                            0,
                            Math.ceil(selectedPaket.fasilitas.length / 2)
                          )
                          .map((fasilitas, index) => (
                            <li key={index}>{fasilitas}</li>
                          ))}
                      </div>
                      <div className="w-1/2">
                        {selectedPaket.fasilitas
                          .slice(Math.ceil(selectedPaket.fasilitas.length / 2))
                          .map((fasilitas, index) => (
                            <li
                              key={
                                index +
                                Math.ceil(selectedPaket.fasilitas.length / 2)
                              }
                            >
                              {fasilitas}
                            </li>
                          ))}
                      </div>
                    </div>
                  </ul>

                  {/* Spot Destinasi */}
                  <div className="mb-4">
                    <h1 className="text-2xl font-semibold mb-2">
                      Spot Destinasi
                    </h1>
                    <div className="flex">
                      <ul className="w-1/2">
                        {selectedPaket.spotDestinasi
                          .slice(
                            0,
                            Math.ceil(selectedPaket.spotDestinasi.length / 2)
                          )
                          .map((spotDestinasi, index) => (
                            <li key={index}>{spotDestinasi}</li>
                          ))}
                      </ul>
                      <ul className="w-1/2">
                        {selectedPaket.spotDestinasi
                          .slice(
                            Math.ceil(selectedPaket.spotDestinasi.length / 2)
                          )
                          .map((spotDestinasi, index) => (
                            <li
                              key={
                                index +
                                Math.ceil(
                                  selectedPaket.spotDestinasi.length / 2
                                )
                              }
                            >
                              {spotDestinasi}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Modal */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form onSubmit={handleFormSubmit}>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    ✕
                  </button>

                  <h3 className="font-bold text-lg mb-4">Pemesanan Paket</h3>
                </div>
                <p className="mb-4">
                  <strong>Nama Paket: </strong> {modalData.paket}
                </p>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama:
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={modalData.nama}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Jumlah Pax:
                  </label>
                  <input
                    type="number"
                    name="pax"
                    value={modalData.pax}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Masukkan jumlah pax"
                    min="1"
                    required
                  />
                </div>

                <div className="modal-action">
                  <button type="submit" className="btn btn-primary w-full">
                    Pesan
                  </button>
                </div>
              </form>
            </div>
          </dialog>

          {/* Modal End */}
          <PaketLainnya
            filteredPackages={filteredPackages}
            onPaketSelect={handlePaketSelect}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParentComponent;
