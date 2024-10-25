import React from "react";
import ProductHero from "../components/layout/main";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";
import ServicesList from "../components/layout/servicesList";
import NewsLetter from "../../../common/email";
import JoinUs from "../../main/components/layout/join-us";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductHero />
      <ServicesList />
      <JoinUs />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}
