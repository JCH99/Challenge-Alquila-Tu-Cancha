import React, { useContext, useState } from "react";
import { Context } from "../../store/ContextProvider";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import Team from "../Team";
import SelectLogo from "./SelectLogo";

const CRUDEquipos = () => {
  const defaultValues = { name: "", logo: "" };
  const [teamData, setTeamData] = useState(defaultValues);
  const ctx = useContext(Context);

  const emptyForm = teamData.name === "" || teamData.logo === "";
  const disableButton = ctx.teams.length === 2 || emptyForm;

  const handleNameChange = (event) => {
    setTeamData({ ...teamData, name: event.target.value });
  };

  const handleLogoChange = (event) => {
    setTeamData({ ...teamData, logo: event.target.value });
  };

  const submitNewTeam = (event) => {
    //double-check
    if (!disableButton) {
      ctx.addTeam(teamData.name, teamData.logo);
      setTeamData(defaultValues);
    }
  };

  const logos = ctx.data.map((institution) => institution.team_badge);

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
        <TextField
          label="Ingresa un nombre"
          value={teamData.name}
          onChange={handleNameChange}
        />
        <SelectLogo
          logos={logos}
          logo={teamData.logo}
          handleChange={handleLogoChange}
        />
        <Button
          variant="contained"
          disabled={disableButton}
          onClick={submitNewTeam}
        >
          Crear equipo
        </Button>
      </Box>
      <Grid container spacing={{ xs: 6, lg: 12 }}>
        {ctx.teams.map((team, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Team teamCRUD team={team} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default CRUDEquipos;
