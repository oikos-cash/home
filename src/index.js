import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";

import Index from "views/Index.js";

import Error404 from "views/examples/Error404.js";
import Error500 from "views/examples/Error500.js";
import Terms from "terms.js";
import PrivacyMain from "privacy.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/terms" render={(props) => <Terms {...props} />} />
      <Route path="/privacy" render={(props) => <PrivacyMain {...props} />} />
      <Route path="/404-error" render={(props) => <Error404 {...props} />} />
      <Route path="/500-error" render={(props) => <Error500 {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
