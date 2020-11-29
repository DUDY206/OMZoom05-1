import React, { useContext, createContext, useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import "assets/css/swipe.min.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register";

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" render={(props) => <AdminLayout {...props} />} />
      <Route  path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Redirect to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
