import React from "react";
// Material ui
import {
  Dialog,
  DialogTitle,
  Divider,
  DialogContent,
  Typography,
  Grid,
  DialogActions,
  Button,
  Avatar,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
// Components
import Transition from "./DialogTransition";

const DisplayInfo = ({ title, message }) => (
  <Typography>
    <strong>{title}: </strong>
    {message}
  </Typography>
);

const ContactDialog = ({ open, onClose, contact }) => {
  const notAddedMessage = "Not added yet";

  return (
    <Dialog open={open} onClose={onClose} fullWidth TransitionComponent={Transition}>
      <DialogTitle>
        <Grid container alignItems="center">
          <Avatar className="mr-3">
            <Person />
          </Avatar>
          {contact.Name}
        </Grid>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Grid container>
          <Grid item md={6}>
            <DisplayInfo title="First name" message={contact.FirstName} />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo title="Last name" message={contact.LastName} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <DisplayInfo
              title="Email"
              message={contact.Email !== null ? contact.Email : notAddedMessage}
            />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo
              title="Phone"
              message={contact.Phone !== null ? contact.Phone : notAddedMessage}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <DisplayInfo
              title="Birth date"
              message={contact.Birthdate !== null ? contact.Birthdate : notAddedMessage}
            />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo
              title="Description"
              message={contact.Description !== null ? contact.Description : notAddedMessage}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <DisplayInfo
              title="Created platform"
              message={contact.CreatedPlatform === "API" ? "API" : "Manually"}
            />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo
              title="Member since"
              message={new Date(contact.CreatedDate).toLocaleDateString()}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
