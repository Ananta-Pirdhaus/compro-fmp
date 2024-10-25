import React from "react";
import logoFMP from "./common/assets/images/Logo_FMP_Responsive.png";

const SuspenseContent = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
          <img
            src={logoFMP}
            alt="Logo Al Bahjah"
            className="rounded-full h-28 w-28"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuspenseContent;
