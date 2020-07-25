import React from "react";
// Material ui
import {
  Dialog,
  Slide,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DisplayInfo = ({ title, message }) => (
  <Typography>
    <strong>{title}: </strong>
    {message}
  </Typography>
);

const ContactDialog = ({ open, onClose, contact }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth TransitionComponent={Transition}>
      <DialogTitle>
        <Grid container alignItems="center">
          <Avatar className="mr-3">
            <Person />
          </Avatar>
          {contact.name}
        </Grid>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Grid container>
          <Grid item md={6}>
            <DisplayInfo title="Name" message={contact.name} />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo title="Email" message={contact.email} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <DisplayInfo title="Phone" message={contact.phone} />
          </Grid>

          <Grid item md={6}>
            <DisplayInfo title="website" message={contact.website} />
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
