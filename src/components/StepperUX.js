import * as React from "react";
import {
  Typography,
  Button,
  StepLabel,
  Step,
  Stepper,
  Box,
} from "@mui/material";

import Landing from "./Landing";
import CRUDJugadores from "./CRUDJugadores";
import CRUDEquipos from "./CRUDEquipos";

const steps = [
  "Elegir Modo de Juego",
  "Crea los equipos",
  "¡Agrega a tus jugadores!",
];

export default function StepperUX() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let activeComponent;

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
    default:
      activeComponent = <p>Ocurrió un error. Intente de nuevo más tarde.</p>;
  }

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
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
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
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

            <Button onClick={handleNext} size="large" variant="contained">
              {activeStep === steps.length - 1 ? "Terminar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
