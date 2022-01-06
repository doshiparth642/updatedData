import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./config/history";
import UserComponent from "./components/UserComponent";
//import Function from "./components/Function";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  const token = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ({ childProps }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PublicRoute path="/" component={UserComponent} exact />
        </Switch>
      </Router>
    </div>
  );
};
