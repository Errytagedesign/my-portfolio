import React from "react";

import {
  About,
  HeroSection,
  Skills,
  Testimonials,
  Work,
} from "../../components/exportAllcomp";

function HomePage() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Skills />
      <Work />
      <Testimonials />
    </div>
  );
}

export default HomePage;
