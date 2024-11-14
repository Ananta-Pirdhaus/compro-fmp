import React from "react";
import Navbar from "../../../common/navbar";
import Footer from "../../../common/footer";
import BlogSection from "../components/blog";
import NewsLetter from "../../../common/email";

export default function BlogPage() {
  return (
    <React.Fragment>
      <Navbar />
      <BlogSection />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}
