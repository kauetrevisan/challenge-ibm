import React from "react";
// Material ui
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">IBM challenge</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
