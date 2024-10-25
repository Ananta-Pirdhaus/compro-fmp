import React from "react";
import ProductHero from "../components/layout/main";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";
import ProductList from "../components/layout/productList";
import NewsLetter from "../../../common/email";
import JoinUs from "../../main/components/layout/join-us";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductHero />
      <ProductList />
      <JoinUs />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}
