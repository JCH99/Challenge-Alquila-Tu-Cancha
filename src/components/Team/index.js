import React from "react";
import ListPlayers from "./ListPlayers";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import PlayersNumbers from "./PlayersNumber";
const Team = (props) => {
  const borderColor =
    props.team.players.length === 5 ? "primary.main" : "secondary.main";
  return (
    <Box
      sx={{
        m: 2,
        border: 2,
        borderRadius: 3,
        p: 1,
        borderColor: borderColor,
        minWidth: 400,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ width: 64, height: 64, mr: 1 }}
            alt="Cuadro de Futbol"
            src={props.team.logo}
            variant="square"
          />
          <Typography variant="h6">{props.team.name}</Typography>
        </Box>
        <PlayersNumbers players={props.team.players.length} />
      </Box>
      {props.showPlayers && <Divider />}
      {props.showPlayers && <ListPlayers players={props.team.players} />}
    </Box>
  );
};

export default Team;
