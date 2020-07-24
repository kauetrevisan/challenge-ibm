import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
