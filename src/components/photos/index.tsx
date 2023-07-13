import React, { useEffect, useRef, useState } from "react";
import about from "../../assets/fotos/about.jpeg";
import photo2 from "../../assets/fotos/1.png";
import photo3 from "../../assets/fotos/2.png";
import photo4 from "../../assets/fotos/profile.png";
import { motion } from "framer-motion";

import "./styles.css";
import { Typography } from "@mui/material";

const images = [about, photo2, photo3, photo4];

const CustomCarousel: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);

  return (
    <div className="carousel-container">
      <Typography textAlign={"center"} color={"#fff"}>
        Galeria de fotos
      </Typography>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Text alt" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomCarousel;
