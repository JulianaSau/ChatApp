import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getToken } from "./useToken";
// import useToken from "./useToken";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  // const { token, setToken } = useToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <Component {...props} />
        ) : (
          // <Redirect
          //   to={{ pathname: "/login", state: { from: props.location } }}
          //   // setToken={setToken}
          // />
          <Navigate replace to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
