import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Context } from "../../store/ContextProvider";
import EditDialog from "./EditDialog";
const CRUDOperations = (props) => {
  const ctx = useContext(Context);
  const [openDialog, setOpenDialog] = useState(false);
  const logos = ctx.data.map((institution) => institution.team_badge);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleUpdate = (name, logo) => {
    setOpenDialog(false);
    ctx.editTeam(props.team.id, name, logo);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          color="secondary"
          onClick={handleClickOpen}
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          startIcon={<ClearIcon />}
          color="secondary"
          onClick={() => ctx.removeTeam(props.team.id)}
        >
          Borrar
        </Button>
      </Box>
      <EditDialog
        logos={logos}
        team={props.team}
        open={openDialog}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default CRUDOperations;
