import React from "react";
import { Typography, Box } from "@mui/material";
import SearchAccordions from "./SearchAccordions";
import Equipo from "../Equipo";
const index = () => {
  return (
    <section>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        ¡Agregá a tus jugadores!
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Elegí entre distintos equipos y mezclalos de la forma que quieras.
      </Typography>
      <SearchAccordions />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Equipo showPlayers />
        <Equipo showPlayers />
      </Box>
    </section>
  );
};

export default index;
