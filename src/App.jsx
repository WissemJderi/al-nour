import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Teachers from "./components/Teachers.jsx";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="md:mx-80 flex flex-col text-center">
        <Hero />
        <CTA />
        <AboutUs />
        <Courses />
        <div className="bg-gray-50 py-16">
          <Teachers />
        </div>
        <Pricing />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
      {/* <Features /> */}
    </React.Fragment>
  );
}

export default App;
