import React from "react";
import { Switch, Route } from "react-router-dom";

//import pages/rotas
//Rota sem autenticação
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
//Rotas com autenticação
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
