import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// Material ui
import {
  Dialog,
  DialogTitle,
  Divider,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@material-ui/core";
// Components
import Transition from "./DialogTransition";
import CustomTextField from "./CustomTextField";
// Utils
import api from "../utils/api";

const AddContactsDialog = ({ open, onClose, setSnackbar }) => {
  // States
  const [loading, setLoading] = useState(false);

  const initialValues = { contactsNumber: 0 };

  const validationSchema = yup.object({
    contactsNumber: yup.number().required().positive().integer(),
  });

  // Send the number to the API
  const handleSubmit = async ({ contactsNumber }) => {
    try {
      setLoading(true);

      const { data } = await api.post(
        "/Customer",
        { CustomNumber: contactsNumber },
        { headers: { "X-IBM-Client-Id": process.env.REACT_APP_IBM_KEY } }
      );

      console.log(data);
    } catch (err) {
      console.log(err, err.response);

      setSnackbar({
        open: true,
        type: "error",
        message: "An error happened when getting the contacts",
      });

      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth TransitionComponent={Transition}>
      <DialogTitle>Add new contacts</DialogTitle>

      <Divider />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <DialogContent>
              <CustomTextField
                name="contactsNumber"
                label="Number of contacts"
                type="number"
                variant="outlined"
                required
                fullWidth
                disabled={loading}
              />
            </DialogContent>

            <DialogActions>
              <Button color="primary" onClick={onClose}>
                Cancel
              </Button>

              <Button color="primary" type="submit" disabled={loading}>
                Add
              </Button>

              {loading && <CircularProgress />}
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddContactsDialog;
