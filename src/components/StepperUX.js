import React, { useContext } from "react";
import {
  Button,
  StepLabel,
  Step,
  Stepper,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Context } from "../store/ContextProvider";
import Landing from "./Landing";
import CRUDJugadores from "./CRUDJugadores";
import CRUDEquipos from "./CRUDEquipos";
import FinalTeams from "./FinalTeams";
import disableNextStep from "../helpers/disableNextStep";

const steps = [
  "Elegir Modo de Juego",
  "Crear los equipos",
  "¡Agregar a tus jugadores!",
];

export default function StepperUX() {
  const [activeStep, setActiveStep] = React.useState(0);

  const ctx = useContext(Context);

  const nextStepDisabled = disableNextStep(
    activeStep,
    ctx.gameMode,
    ctx.loadingData,
    ctx.teams
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    ctx.resetGame();
  };

  let activeComponent;
  const nextButtonText =
    activeStep === steps.length - 1 ? "Terminar" : "Siguiente";

  switch (activeStep) {
    case 0:
      activeComponent = <Landing />;
      break;
    case 1:
      activeComponent = <CRUDEquipos />;
      break;
    case 2:
      activeComponent = <CRUDJugadores />;
      break;
    case 3:
      activeComponent = <FinalTeams />;
      break;
    default:
      activeComponent = <p>Ocurrió un error. Intente de nuevo más tarde.</p>;
  }

  return (
    <Box sx={{ width: "100%", py: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ my: 5, px: 2 }}>{activeComponent}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 1 }}
              size="large"
              variant="outlined"
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} size="large" variant="contained">
              Jugar de nuevo!
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ my: 5, px: 2 }}>{activeComponent}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              size="large"
              variant="outlined"
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              size="large"
              variant="contained"
              disabled={nextStepDisabled}
            >
              {ctx.loadingData ? (
                <CircularProgress size={27} color="primary" thickness={5} />
              ) : (
                nextButtonText
              )}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
