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
