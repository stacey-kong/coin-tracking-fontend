import {
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("token") ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
}
