import React from "react";
import {
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
} from "../../../../common/assets/images/sponsorship/sponsorship";

const Sponsorship = () => {
  const sponsors = [
    { src: image15, alt: "Bank Resonia - Sponsorship" },
    { src: image16, alt: "BKKBN Kaltim - Sponsorship" },
    { src: image17, alt: "Dishub - Sponsorship" },
    { src: image18, alt: "LHK - Sponsorship" },
    { src: image19, alt: "Nindya Karya - Sponsorship" },
    { src: image20, alt: "Pertamina - Sponsorship" },
    { src: image21, alt: "PLN - Sponsorship" },
    { src: image22, alt: "PUPR - Sponsorship" },
    { src: image23, alt: "SHCP - Sponsorship" },
    { src: image24, alt: "Tasti - Sponsorship" },
    // Add more images if needed
  ];

  return (
    <React.Fragment>
      <div className="hidden lg:block md:block">
        <div className="bg-white py-8 overflow-hidden">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-blue-700">
              Our Clients
            </h2>
            <p>
              We pride ourselves in being trusted and having the opportunity to
              work with leading companies in their respective fields.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="grid space-x-8 grid-cols-5 whitespace-nowrap">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    loading="lazy"
                    className="md:h-24 lg:h-28 sm:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sponsorship;
