import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailPage from "../pages/detail/DetailPage";
import HomePage from "../pages/HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/product/:id" component={DetailPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}
