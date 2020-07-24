import React from "react";
// Material ui
import { TextField } from "@material-ui/core";
// Formik
import { useField } from "formik";

const CustomTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return <TextField {...props} {...field} helperText={errorText} error={!!errorText} />;
};

export default CustomTextField;
