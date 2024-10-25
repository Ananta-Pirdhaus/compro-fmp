import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals.jsx";
import SuspenseContent from "./SuspenseContent.jsx";
import Banner from "./banner.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <div data-theme="light" >
      <div className="font-sans">
        <Suspense fallback={<SuspenseContent />}>
          <Banner />
          <App />
        </Suspense>
      </div>
    </div>
  </React.Fragment>
);

reportWebVitals();
