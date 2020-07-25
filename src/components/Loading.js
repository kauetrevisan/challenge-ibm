import React from "react";
// Material ui
import { CircularProgress, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0",
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const Loading = ({ message, style }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />

      <Typography variant="h5">{message}</Typography>
    </div>
  );
};

export default Loading;
