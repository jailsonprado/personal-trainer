import { Grid, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Grid container justifyContent="center" height="100vh" mt={2}>
      <Grid item xs={12} md={6}>
        <Grid container direction={"column"} alignItems={"center"} spacing={1}>
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
            fontFamily={"sans-serif"}
            fontSize={24}
            color={"white"}
          >
            Sobre mim
          </Typography>

          <Typography color={"#ffffff"} textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum{" "}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
