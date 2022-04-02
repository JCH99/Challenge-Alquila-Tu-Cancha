import * as React from "react";
import translatePosition from "../../helpers/translatePosition";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function ListPlayers(props) {
  return (
    <List
      disablePadding
      dense={props.dense}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {props.players.map((player) => {
        const playerType = translatePosition(player.player_type);
        return (
          <>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
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
              <ListItemText
                primary={player.player_name}
                secondary={playerType}
              />
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}
