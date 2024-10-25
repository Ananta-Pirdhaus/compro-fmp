import React from "react";
import HomeHero from "./layout/main";
import ProductHero from "./layout/product";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";
import Testimonials from "./layout/photo-gallery";
import Sponsorship from "./layout/sponsorship";
import TeaMate from "./layout/teamate";
import JoinUs from "./layout/join-us";
import NewsLetter from "../../../common/email";

export default function MainLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeHero />
      <ProductHero />
      <Sponsorship />
      <TeaMate />
      <Testimonials />
      <JoinUs />
      <NewsLetter/>
      <Footer />
    </React.Fragment>
  );
}
