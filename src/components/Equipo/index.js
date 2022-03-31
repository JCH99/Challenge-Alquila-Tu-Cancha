import React from "react";
import ListPlayers from "./ListPlayers";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import PlayersNumbers from "./PlayersNumber";
const index = (props) => {
  return (
    <Box
      sx={{
        m: 2,
        border: 2,
        borderRadius: 3,
        p: 1,
        borderColor: "primary.main",
        minWidth: 400,
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
            sx={{ width: 64, height: 64 }}
            alt="Remy Sharp"
            src="https://apiv3.apifootball.com/badges/549_tigre.jpg"
          />
          <Typography variant="h6">los tipitos</Typography>
        </Box>
        <PlayersNumbers players={5} />
      </Box>
      {props.showPlayers && <Divider />}
      {props.showPlayers && <ListPlayers />}
    </Box>
  );
};

export default index;
