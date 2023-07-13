import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about from "../../assets/fotos/about.jpeg";
import photo2 from "../../assets/fotos/1.png";
import photo3 from "../../assets/fotos/2.png";
import photo4 from "../../assets/fotos/profile.png";

import { Grid } from "@mui/material";

const images = [about, photo2, photo3, photo4];

function CustomCarousel() {
  return (
    <Grid container justifyContent="center" mt={5} id="photos">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={50}
          dynamicHeight={false}
          verticalSwipe="natural"
          useKeyboardArrows={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" style={{ maxHeight: 300 }} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default CustomCarousel;
