import React from "react";
import PropTypes from "prop-types";

const PaketLainnya = ({ onPaketSelect, filteredPackages }) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-2xl font-bold my-2">Paket Lainnya dari Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((paket) =>
              paket.subPaket.map((sub) => (
                <div
                  key={sub.id}
                  className="card bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={sub.gambar[0]}
                      alt={sub.namaSubPaket}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      {sub.namaSubPaket}
                    </h3>
                    <p className="text-gray-600">{sub.deskripsi}</p>
                    <p className="text-gray-800 font-bold">
                      Rp {sub.harga.idr.toLocaleString()}
                    </p>
                    <button
                      className="w-full bg-green-500 hover:bg-green-700 active:bg-green-800  rounded-full px-4 py-2 text-white focus:outline-none mt-4   "
                      onClick={() => onPaketSelect(sub.slug)}
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            <p>Tidak ada paket lain yang tersedia.</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

PaketLainnya.propTypes = {
  onPaketSelect: PropTypes.func.isRequired,
  filteredPackages: PropTypes.array.isRequired,
};

export default PaketLainnya;
