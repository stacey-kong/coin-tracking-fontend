import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";
import {Register} from "./pages/Register";
import useToken from "./Hook/useToken";

export default function App() {
  const { token, setToken } = useToken();
  // if (!token || !token.length) {
  //   console.log("no token");
  //   return <Login setToken={setToken} />;
  // }

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
