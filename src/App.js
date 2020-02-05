import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Error } from "./pages/error";
import { Home } from "./pages/home";
import { NavBar } from "./components/navBar";
import { Rooms } from "./pages/rooms";
import { SingleRoom } from "./pages/singleRoom";

export function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
