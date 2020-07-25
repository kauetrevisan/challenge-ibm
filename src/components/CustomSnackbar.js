import React from "react";
// Material ui
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const AlertSnackbar = ({ open, onClose, message, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={7000}
      onClose={onClose}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
