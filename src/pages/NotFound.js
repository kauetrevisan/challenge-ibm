import React from "react";
import { useHistory } from "react-router-dom";
import { Paper, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(3),
    textAlign: "center",
    width: "80%",
  },
}));

const NotFound = () => {
  // Hooks
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h3">404 - Page not found</Typography>

      <Typography variant="subtitle1">
        The page you are looking for might have been removed, had its name changed or is temporarily
        unavailable
      </Typography>

      <Button variant="outlined" className="mt-4" onClick={() => history.push("/")}>
        Take me home
      </Button>
    </Paper>
  );
};

export default NotFound;
