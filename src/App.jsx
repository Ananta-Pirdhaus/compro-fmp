import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const HomePage = lazy(() => import("./clients/main"));
const AboutPage = lazy(() => import("./clients/about"));
const ServicePage = lazy(() => import("./clients/services"));
const ProductPage = lazy(() => import("./clients/products"));
const ContactPage = lazy(() => import("./clients/contact"));
const DetailProduct = lazy(() => import("./clients/detail-product"));
const DetailAbout = lazy(() => import("./clients/about-detail"));
const BlogPage = lazy(() => import("./clients/blog"));

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/product/:slug" element={<DetailProduct />} />
          <Route path="/about-us/:slug" element={<DetailAbout />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
