import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog,
  Box,
  Typography,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";

export default function DialogAddToTeam(props) {
  const { onClose, open, availableTeams, onChoice } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onChoice(value);
  };
  console.log(open);
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>¿En qué equipo va a jugar?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {availableTeams.length === 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DoneIcon
              sx={{
                width: 48,
                height: 48,
                p: 0.5,
                mb: 1,
                border: 1,
                borderRadius: "50%",
                color: "primary.main",
              }}
            />
            <Typography>¡Ya completaste ambos equipos!</Typography>
          </Box>
        )}
        {availableTeams.map((team, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(team.id)}
            key={index}
          >
            <ListItemAvatar>
              <Avatar variant="square" src={team.logo} />
            </ListItemAvatar>
            <ListItemText primary={team.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
