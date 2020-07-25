import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// Material ui
import { Typography, makeStyles, Paper, Button } from "@material-ui/core";
// Components
import CustomTextField from "../components/CustomTextField";
import CustomSnackbar from "../components/CustomSnackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "70%",
    padding: theme.spacing(3),
  },
}));

const Login = () => {
  // Hooks
  const classes = useStyles();

  const [snackbar, setSnackbar] = useState({ open: false, type: "info", message: "" });

  const initialValues = { email: "", password: "" };

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleSubmit = (data) => {
    console.log(data);

    setSnackbar({
      open: true,
      type: "error",
      message: "An error happened when getting the contacts",
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" className="text-center mb-3">
          Login
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <CustomTextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                className="mb-3"
              />

              <CustomTextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                className="mb-3"
              />

              <Button type="submit" fullWidth variant="outlined" color="primary">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>

      <CustomSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        type={snackbar.type}
        message={snackbar.message}
      />
    </div>
  );
};

export default Login;
