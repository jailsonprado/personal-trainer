/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import Navbar from "components/navbar";
import profile from "../assets/fotos/profile.png";
import spotifyIcon from "../assets/icons/spotify.png";
import iconTrainer from "../assets/icon-academia.png";
import { StyledButton } from "components/contact/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact: React.FC = () => (
  <Grid container direction="column">
    <Navbar disabled={true} />
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      flexDirection={"column"}
      style={{ padding: "20px" }}
    >
      <Grid item mt={-10}>
        <Typography
          color={"white"}
          style={{ fontFamily: "bloody", textShadow: "0 1px 5px red" }}
          fontSize={26}
          textAlign={"center"}
          variant="body1"
        >
          SANGUE NOS ZOI
        </Typography>
      </Grid>

      <Grid item>
        <Avatar alt="Avatar" src={profile} sx={{ width: 200, height: 200 }} />
      </Grid>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography color={"white"} variant="h5">
          Lucas Segal
        </Typography>
        <Typography color={"white"} textAlign={"center"} fontSize={16}>
         Buscando um estilo de vida melhor a cada dia 
        </Typography>
      </Grid>
    </Grid>

    <Grid
      container
      alignItems={"center"}
      justifyContent="center"
      spacing={2}
      flexDirection={"column"}
    >
      <Grid item>
        <StyledButton
          style={{
            width: 320,
            height: 50,
          }}
          endIcon={<img src={iconTrainer} style={{ width: 30, height: 30 }} />}
          variant="contained"
          color="primary"
          href="https://api.whatsapp.com/send?phone=5528999636120&text=Olá Lucas%0AGostaria de saber mais sobre sua consultoria e fazer parte do Team Lucas Segal"
        >
          ME CHAME NO WHATSAPP
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          style={{
            width: 320,
            height: 50,
          }}
          endIcon={<WhatsAppIcon sx={{ width: "30px", color: "#fff" }} />}
          variant="contained"
          href="https://chat.whatsapp.com/LGp80yg1jOU6X8FUBLDJoj"
        >
          Meu Grupo no WhatsApp
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          style={{
            width: 320,
            height: 50,
          }}
          endIcon={<img src={spotifyIcon} style={{ width: 30, height: 30 }} />}
          variant="contained"
          color="primary"
          href="spotify-link"
          disabled
        >
          PlayList Academia - Spotify
        </StyledButton>
      </Grid>
    </Grid>
  </Grid>
);

export default Contact;
