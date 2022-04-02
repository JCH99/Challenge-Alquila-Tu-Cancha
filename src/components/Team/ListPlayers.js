import { Fragment } from "react";
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

import DeleteIcon from "@mui/icons-material/Delete";

export default function ListPlayers(props) {
  return (
    <List
      disablePadding
      dense={props.dense}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {props.players.map((player, index) => {
        const playerType = translatePosition(player.position);
        return (
          <Fragment key={index}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 48, height: 48, mr: 2 }}
                  src={player.image}
                  alt={`${player.name} photo`}
                />
              </ListItemAvatar>
              <ListItemText primary={player.name} secondary={playerType} />
            </ListItem>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
}
