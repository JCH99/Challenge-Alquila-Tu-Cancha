import React, { useContext, useState } from "react";
import { Context } from "../../store/ContextProvider";
import { Typography, Box } from "@mui/material";
import SearchAccordions from "./SearchAccordions";
import Team from "../Team";
const CRUDJugadores = () => {
  const ctx = useContext(Context);
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
        {ctx.teams.map((team, index) => (
          <Team showPlayers team={team} key={index} />
        ))}
      </Box>
    </section>
  );
};

export default CRUDJugadores;
