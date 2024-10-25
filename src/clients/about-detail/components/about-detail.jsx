import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  paketWisata,
  areaWisata,
} from "../../../common/assets/data/dummyDataAbout";
import SuspenseContent from "../../../SuspenseContent";

const AboutDetails = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true); // State untuk loading
  const [detail, setDetail] = useState(null); // State untuk menyimpan detail paket atau area

  useEffect(() => {
    // Simulasi delay untuk loading atau pengambilan data
    const fetchData = () => {
      // Cari data paket wisata berdasarkan slug
      const paketDetail = paketWisata.find((paket) => paket.slug === slug);

      // Cari data area wisata berdasarkan slug
      const areaDetail = areaWisata.find((area) => area.slug === slug);

      // Tentukan jenis detail yang akan ditampilkan
      const isPaket = !!paketDetail;
      const detailData = isPaket ? paketDetail : areaDetail;

      setDetail(detailData); // Simpan detail ke state
      setLoading(false); // Set loading ke false setelah data ditemukan
    };

    // Simulasikan waktu tunggu untuk loading, misalnya 1 detik
    setTimeout(fetchData, 1000);
  }, [slug]);

  if (loading) {
    return <SuspenseContent />; // Tampilkan komponen SuspenseContent saat loading
  }

  if (!detail) {
    return <p>Detail tidak ditemukan</p>; // Tampilkan pesan jika detail tidak ditemukan
  }

  const paragraphs = detail.definisiTrip
    .split("\n\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <React.Fragment>
      <main className="mt-10 sm:mx-5 md:mx-10 lg:mx-20">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold leading-tight">
              {detail.namaPaket || detail.namaArea}
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {detail.lokasi || "Lokasi Tidak Diketahui"}
            </a>
          </div>

          <img
            src={detail.gambar[0]}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
            loading="lazy"
            alt={detail.namaPaket || detail.namaArea}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-lg leading-relaxed w-full lg:w-3/4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="pb-6 text-justify"
                style={{ textIndent: "2em" }}
              >
                {paragraph}
              </p>
            ))}

            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Dokumentasi Tambahan tentang {detail.namaPaket || detail.namaArea}
              .
            </div>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="admin"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-sm"> Admin </p>
                  <p className="font-semibold text-xs"> Admin </p>
                </div>
              </div>
              <p className="py-3">
                Admin menulis tentang {detail.namaPaket || detail.namaArea}.
                Nikmati liburan Anda tanpa harus memikirkan hal-hal yang rumit.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-blue-700 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutDetails;
