import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog,
} from "@mui/material";

export default function DialogAddToTeam(props) {
  const { onClose, selectedValue, open, availableTeams } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>¿En qué equipo va a jugar?</DialogTitle>
      <List sx={{ pt: 0 }}>
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
