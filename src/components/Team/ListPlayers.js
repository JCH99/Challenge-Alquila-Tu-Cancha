import { Fragment, useContext } from "react";
import { Context } from "../../store/ContextProvider";
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
  const ctx = useContext(Context);
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
                props.deletable && (
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() =>
                      ctx.removePlayerFromTeam(props.teamId, player.id)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                )
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
            {index + 1 !== props.players.length && <Divider />}
          </Fragment>
        );
      })}
    </List>
  );
}
