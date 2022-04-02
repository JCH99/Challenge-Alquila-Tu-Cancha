import React, { useContext, useState } from "react";
import { Context } from "../../store/ContextProvider";
import SelectTeam from "./SelectTeam";
import { Box, Grid } from "@mui/material";
import Player from "./Player";
const SearchPlayersSelect = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const ctx = useContext(Context);

  const changeTeamHandler = (event) => {
    setSelectedTeam(event.target.value);
  };

  const teamsData = ctx.data.map((team) => {
    return {
      name: team.team_name,
      logo: team.team_badge,
      key: team.team_key,
    };
  });

  const selectedTeamData = ctx.data.find(
    (institution) => institution.team_key === selectedTeam
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SelectTeam
        handleChange={changeTeamHandler}
        teams={teamsData}
        team={selectedTeam}
      />
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {selectedTeamData.players.map((player) => {
          return (
            <Grid item xs={3}>
              <Player player={player} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SearchPlayersSelect;
