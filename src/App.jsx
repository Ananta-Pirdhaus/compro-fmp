import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const HomePage = lazy(() => import("./clients/main"));
const AboutPage = lazy(() => import("./clients/about"));
const ProductPage = lazy(() => import("./clients/product"));
const ContactPage = lazy(() => import("./clients/contact"));
const DetailPaket = lazy(() => import("./clients/detail-product"));
const DetailAbout = lazy(() => import("./clients/about-detail"));

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/product/:slug" element={<DetailPaket />} />
          <Route path="/about-us/:slug" element={<DetailAbout />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
