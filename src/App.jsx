import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularTours from "./components/PopularTours";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <PopularTours
          setSelectedDestination={setSelectedDestination}
        />

        <BookingForm
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />

        <Services
          setSelectedService={setSelectedService}
        />

        <About />

        <WhyChooseUs />

        <Testimonials />

        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;