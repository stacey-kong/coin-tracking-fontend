import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
