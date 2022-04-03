import React, { useState, useContext } from "react";
import { Context } from "../../store/ContextProvider";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import translatePosition from "../../helpers/translatePosition";
import DialogAddToTeam from "./DialogAddToTeam";
import playerAvailable from "../../helpers/playerAvailable";

const Player = (props) => {
  const { player } = props;
  const ctx = useContext(Context);
  const [open, setOpen] = useState(false);
  const playerIsAvailable = playerAvailable(player.player_key, ctx.teams);
  const playerType = translatePosition(player.player_type);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOptionClicked = (idTeam) => {
    setOpen(false);
    ctx.addPlayerToTeam(idTeam, {
      name: player.player_name,
      image: player.player_image,
      position: playerType,
      id: player.player_key,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const availableTeamsToAdd = ctx.teams.filter(
    (team) => team.players.length < 5
  );

  return (
    <>
      <ListItem
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 4,
        }}
        secondaryAction={
          playerIsAvailable && (
            <Tooltip title="Agregar jugador" onClick={handleClickOpen}>
              <IconButton edge="end" aria-label="add_player">
                <AddIcon />
              </IconButton>
            </Tooltip>
          )
        }
      >
        <ListItemAvatar>
          <Avatar
            sx={{ width: 52, height: 52, mr: 2 }}
            src={player.player_image}
            alt={`${player.player_name} photo`}
          />
        </ListItemAvatar>
        <ListItemText primary={player.player_name} secondary={playerType} />
      </ListItem>
      <DialogAddToTeam
        open={open}
        onClose={handleClose}
        availableTeams={availableTeamsToAdd}
        onChoice={handleOptionClicked}
      />
    </>
  );
};

export default Player;
