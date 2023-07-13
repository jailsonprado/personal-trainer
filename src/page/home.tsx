import React from "react";
import { Grid } from "@mui/material";
import About from "components/about";
import WhatsAppButton from "components/button-wpp";
import FormStepper from "components/contact";
import Header from "components/header";
import Navbar from "components/navbar";
import CustomCarousel from "components/photos";
import SmoothScroll from "smooth-scroll";
import { Settings } from "react-slick";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home: React.FC = () => (
  <Grid container direction="column">
    <Navbar />
    <Grid
      item
      xs={10}
      style={{ flex: 1, overflow: "auto", justifyContent: "space-between" }}
    >
      <Header />
      <About />
      <CustomCarousel />
      <FormStepper />
    </Grid>

    <Grid item>
      <WhatsAppButton />
    </Grid>
  </Grid>
);

export default Home;
