import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { StyledButton } from "components/contact/styles";
import { Container, StyledImage } from "./styles";

const Header: React.FC = () => {
  return (
    <Container
      container
      alignItems="center"
      justifyContent="center"
      height="100vh"
      mt={-10}
      id="home"
    >
      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <StyledImage
              src={require("../../assets/cf7b4cb8-22f4-44b4-9ae0-a2fe6b461db1-removebg (1) 2.png")}
              alt="Imagem"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item mt={-9}>
            <img
              src={require("../../assets/logo.png")}
              alt="Imagem"
              style={{
                maxWidth: "200px",
                maxHeight: "100%",
                zIndex: "10000",
              }}
            />
          </Grid>
          <Grid
            container
            xl={12}
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="center"
            mt={2}
          >
            <Grid item>
              <InstagramIcon
                sx={{
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="white"
                textAlign={"center"}
                sx={{ fontWeight: "bold" }}
              >
                lucas_segall
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <StyledButton variant="contained">
              <Typography
                fontFamily="sans-serif"
                color="white"
                textAlign="center"
              >
                Contato
              </Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
