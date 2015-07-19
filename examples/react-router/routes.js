import React from "react";
import { Redirect, Route } from "react-router";

import App from "./components/App";
import Home from "./components/Home";
import User from "./components/User";

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/users/:login" component={User} />
    <Redirect from="*" to="/" />
  </Route>
);