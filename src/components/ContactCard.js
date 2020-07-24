import React from "react";
// Material ui
import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    flex: "1 1 auto",
    maxWidth: "320px",
    margin: theme.spacing(1),
  },
}));

const ContactCard = ({ contact }) => {
  // Hooks
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>{contact.name[0]}</Avatar>
          </Grid>

          <Grid item>
            <Typography>
              <strong>{contact.name}</strong>
            </Typography>

            <Typography variant="subtitle2" color="textSecondary">
              {contact.email}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button color="primary" fullWidth>
          View more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
