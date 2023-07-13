import React from "react";
import About from "components/about";
import WhatsAppButton from "components/button-wpp";
import FormStepper from "components/contact";
import Header from "components/header";
import Navbar from "components/navbar";
import CustomCarousel from "components/photos";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home: React.FC = () => (
  <div>
    <Navbar />

    <Header />
    <About />
    <CustomCarousel />
    <FormStepper />

    <WhatsAppButton />
  </div>
);

export default Home;
