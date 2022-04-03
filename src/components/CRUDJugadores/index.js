import React, { useContext } from "react";
import { Context } from "../../store/ContextProvider";
import { Typography, Grid } from "@mui/material";
import SearchPlayersSelect from "./SearchPlayersSelect";
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
      <SearchPlayersSelect />

      <Grid container spacing={{ xs: 6, lg: 12 }}>
        {ctx.teams.map((team, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Team showPlayers team={team} key={index} deletable />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default CRUDJugadores;
