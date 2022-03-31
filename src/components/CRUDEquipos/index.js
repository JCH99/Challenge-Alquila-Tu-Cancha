import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import Equipo from "../Equipo";
import SelectLogo from "./SelectLogo";
const index = () => {
  return (
    <section>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Creá los equipos
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Podrás elegir entre diferentes escudos y el nombre que quieras! Recorda
        que podes crear hasta 2 equipos.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 580,
          mx: "auto",
          my: 4,
        }}
      >
        <TextField label="Ingresa un nombre" />
        <SelectLogo />
        <Button variant="contained">Crear equipo</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Equipo />
        <Equipo />
      </Box>
    </section>
  );
};

export default index;
