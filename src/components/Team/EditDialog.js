import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SelectLogo from "../CRUDEquipos/SelectLogo";

export default function EditDialog(props) {
  const { open, handleClose, team } = props;
  const defaultValues = { name: team.name, logo: team.logo };
  const [teamData, setTeamData] = useState(defaultValues);
  const disableButton = teamData.name === "";
  const handleNameChange = (event) => {
    setTeamData({ ...teamData, name: event.target.value });
  };

  const handleLogoChange = (event) => {
    setTeamData({ ...teamData, logo: event.target.value });
  };

  const submitNewData = (event) => {
    if (!disableButton) {
      props.handleUpdate(teamData.name, teamData.logo);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Cambiá el nombre o cuadro de tu equipo sin necesidad de borrarlo y
          volver a agregar jugadores.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Ingresa un nombre"
          type="text"
          fullWidth
          variant="standard"
          value={teamData.name}
          onChange={handleNameChange}
        />
        <SelectLogo
          logos={props.logos}
          logo={teamData.logo}
          handleChange={handleLogoChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={submitNewData}
          color="primary"
          disabled={disableButton}
        >
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
