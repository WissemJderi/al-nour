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
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex flex-col text-center mx-4 sm:mx-8 lg:mx-20 xl:mx-60">
        <Hero />
        <CTA />
        <AboutUs />
        <Courses />
        <section className="bg-gray-50 py-12 md:py-16">
          <Teachers />
        </section>
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
