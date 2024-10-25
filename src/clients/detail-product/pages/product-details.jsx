import React from "react";
import ProductDetailsHero from "../components/product-details";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";

export default function ProductDetails() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductDetailsHero />
      <Footer />
    </React.Fragment>
  );
}
