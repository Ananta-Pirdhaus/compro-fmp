import React from "react";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";
import AboutDetails from "../components/about-detail";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutDetails />
      <Footer />
    </React.Fragment>
  );
}
