import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Team from "../Team";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const FinalTeams = () => {
  return (
    <section>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        ¡Listo!
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        ¡Ya tenes tu dreamTeam para el picadito! ¡Ahora reserva la canchita!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://alquilatucancha.com/"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" startIcon={<SportsSoccerIcon />}>
            ¡Reserva tu canchita!
          </Button>
        </a>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Team showPlayers />
        <Team showPlayers />
      </Box>
    </section>
  );
};

export default FinalTeams;
