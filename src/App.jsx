import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesPage from "./components/ServicesPage";
import Results from "./components/Results";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === "home" ? (
        <>
          <Hero setPage={setPage} />
          <Services setPage={setPage} />
          <Results />
          <WhyUs />
          <Team />
          <Testimonials />
          <Location />
          <CTA />
        </>
      ) : (
        <ServicesPage />
      )}
      <Footer setPage={setPage} />
      <WhatsAppButton />
    </>
  );
};

export default App;
