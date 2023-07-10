import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useMediaQuery } from "@mui/material";
import about from "../../assets/about.jpeg";
import photo2 from "../../assets/photo-2.jpeg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: about,
  },
  {
    imgPath: photo2,
  },
];

function Photos() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        marginTop: "20px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 && (
              <img
                src={step.imgPath}
                alt=""
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "0 auto",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={(theme) => ({
          maxWidth: 400,
          backgroundColor: "transparent",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#fff",
          },
          "& .MuiMobileStepper-dotActive ~ .MuiMobileStepper-dot": {
            backgroundColor: theme.palette.action.disabled,
          },
        })}
        color="#fff"
        nextButton={
          <Button size="small" onClick={handleNext} disabled={maxSteps === 1}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowRight sx={{ color: "white" }} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={maxSteps === 1}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowLeft sx={{ color: "white" }} />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Photos;
