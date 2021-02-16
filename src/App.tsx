import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Login, Credentials } from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function App() {
  const [token, setToken] = useState<Credentials | null>(null);
  const handleSubmit = function (token: Credentials): void {
    setToken(token);
  };

  if (!token) {
    return <Login onclick={handleSubmit} />;
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
