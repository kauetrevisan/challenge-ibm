import React, { useState } from "react";
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
import ContactDialog from "./ContactDialog";

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

  // States
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar>{contact.Name[0]}</Avatar>
            </Grid>

            <Grid item>
              <Typography>
                <strong>{contact.Name}</strong>
              </Typography>

              <Typography variant="subtitle2" color="textSecondary">
                {contact.Email !== null ? contact.Email : "Not added yet"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Button color="primary" fullWidth onClick={() => setOpenModal(true)}>
            View more
          </Button>
        </CardActions>
      </Card>

      <ContactDialog open={openModal} onClose={() => setOpenModal(false)} contact={contact} />
    </>
  );
};

export default ContactCard;
