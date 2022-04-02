import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import translatePosition from "../../helpers/translatePosition";

const Player = (props) => {
  const { player } = props;
  const playerType = translatePosition(player.player_type);
  return (
    <ListItem
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 4,
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="add_player">
          <AddIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 48, height: 48, mr: 2 }}
          src={player.player_image}
          alt={`${player.player_name} photo`}
        />
      </ListItemAvatar>
      <ListItemText primary={player.player_name} secondary={playerType} />
    </ListItem>
  );
};

export default Player;
