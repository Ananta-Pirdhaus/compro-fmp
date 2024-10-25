import React from "react";
import AboutHero from "../components/layout/main";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutHero />
      <Footer />
    </React.Fragment>
  );
}
