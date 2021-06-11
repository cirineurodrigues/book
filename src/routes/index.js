import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setIsAuthenticated(token);
    }
  }, [token]);

  return (
    <>
      <Switch>
        <Route
          path="/home"
          component={() => <Home isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/"
          component={() => <Login isAuthenticated={isAuthenticated} />}
        />
      </Switch>
    </>
  );
};

export default Routes;
