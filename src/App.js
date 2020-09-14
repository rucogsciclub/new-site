import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import ExecutiveBoard from "./pages/ExecutiveBoard";
import Merchandise from "./pages/Merchandise";
import Spotlight from "./pages/Spotlight";

const App = () => (
  <>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/e-board" component={ExecutiveBoard} />
      <Route path="/merch" component={Merchandise} />
      <Route path="/spotlight" component={Spotlight} />
    </Switch>

    <Footer />
  </>
);

export default App;
