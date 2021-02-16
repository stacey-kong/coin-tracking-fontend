import Dashboard from "./pages/Dashboard/Dashboard";
import { Login } from "./pages/Login/Login";
import useToken from "../Hook/useToken";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function App() {
  const { token, setToken } = useToken();
  if (!token || !token.length) {
    console.log("no token");
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="dashboard" />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route path="/">
            <Login />
          </Route> */}
      </Switch>
    </Router>
  );
}
