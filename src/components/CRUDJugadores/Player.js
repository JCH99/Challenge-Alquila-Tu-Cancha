import React, { useState, useContext } from "react";
import { Context } from "../../store/ContextProvider";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import translatePosition from "../../helpers/translatePosition";
import DialogAddToTeam from "./DialogAddToTeam";
const Player = (props) => {
  const { player } = props;
  const ctx = useContext(Context);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setSelectedValue(value);
    setOpen(false);
  };

  const availableTeamsToAdd = ctx.teams.filter(
    (team) => team.players.length < 5
  );
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
      onClick={handleClickOpen}
    >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 48, height: 48, mr: 2 }}
          src={player.player_image}
          alt={`${player.player_name} photo`}
        />
      </ListItemAvatar>
      <ListItemText primary={player.player_name} secondary={playerType} />
      <DialogAddToTeam
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        availableTeams={availableTeamsToAdd}
      />
    </ListItem>
  );
};

export default Player;
