import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarError(props) {
  const [open, setOpen] = React.useState(false);
  const { error } = props;

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
    return () => {
      setOpen(false);
    };
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Hubo un error (API). Por favor, intentá luego.
      </Alert>
    </Snackbar>
  );
}
