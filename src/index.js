import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ChallengePage from "views/ChallengePage/ChallengePage.js";
import VideoPage from "views/VideoPage/VideoPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/Challenge" component={ChallengePage} />
      <Route path="/component" component={Components} />
      <Route path="/video" component={VideoPage} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
