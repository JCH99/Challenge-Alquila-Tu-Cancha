import React, { useContext } from "react";
import { Typography, Box, Button } from "@mui/material";
import Team from "../Team";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Context } from "../../store/ContextProvider";

const FinalTeams = () => {
  const ctx = useContext(Context);

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
        {ctx.teams.map((team, index) => (
          <Team showPlayers team={team} key={index} />
        ))}
      </Box>
    </section>
  );
};

export default FinalTeams;
