import React, { useContext } from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
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
          mb: 8,
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

      <Grid container spacing={{ xs: 6, lg: 12 }}>
        {ctx.teams.map((team, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Team showPlayers team={team} key={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default FinalTeams;
