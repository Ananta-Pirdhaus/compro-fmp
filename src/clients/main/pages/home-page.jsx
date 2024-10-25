import React from "react";
import HomeHero from "../components/layout/main";
import ProductHero from "../components/layout/product";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";

export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeHero />
      <ProductHero />
      <Footer />
    </React.Fragment>
  );
}
