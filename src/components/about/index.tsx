import { Grid, Typography, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      minHeight="600px"
      mt={2}
      p={2}
      mb={40}
      id="about"
    >
      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <img
              src={require("../../assets/fitness.png")}
              alt="Imagem"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Typography
            mt={-5}
            fontFamily="sans-serif"
            fontSize={24}
            color="white"
          >
            Sobre mim
          </Typography>

          <Typography color="#ffffff" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum{" "}
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              sx={{
                overflowX: "auto",
                backgroundImage:
                  "linear-gradient(205deg, hsl(0deg 96.77% 26.9%) 0%, hsl(0deg 0% 0%) 100%);",
              }}
            >
              <Box flexShrink={0}>
                <img
                  src={require("../../assets/fotos/antes.png")}
                  alt=""
                  style={{
                    maxWidth: "400px",
                    height: "300px",
                  }}
                />
                <Typography textAlign={"center"} color="#ffffff">
                  Antes
                </Typography>
              </Box>
              <Box flexShrink={0}>
                <img
                  src={require("../../assets/fotos/praia.png")}
                  alt=""
                  style={{
                    maxWidth: "400px",
                    height: "300px",
                  }}
                />
                <Typography textAlign={"center"} color="#ffffff">
                  Progresso
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
