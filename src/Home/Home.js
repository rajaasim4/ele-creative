import React from "react";
import About from "../Layout/About/About";
import Banner from "../Layout/Banner/Banner";
import Logo from "../Layout/Logo/Logo";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Pricing from "../Layout/Pricing/Pricing";
import Projects from "../Layout/Projects/Projects";
import Services from "../Layout/Service/Services";
import Solution from "../Layout/Solution/Solution";
import Footer from "../Layout/Footer/Footer";
import Testimonials from "../Layout/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Projects />
      <Solution />
      <Testimonials />
      <Logo />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
