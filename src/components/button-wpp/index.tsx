import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5528999636120?text=Ola%2C+Lucas%21");
  };

  return (
    <Fab
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        bottom: "6px",
        right: "16px",
        zIndex: 9999,
      }}
      onClick={openWhatsApp}
    >
      <WhatsAppIcon color="success" sx={{ width: "100px" }} />
    </Fab>
  );
};

export default WhatsAppButton;
