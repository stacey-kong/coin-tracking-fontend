import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { lazy, Suspense } from "react";
import Register from "./pages/Register";
import CoinDetails from "./pages/Coindetails";
import Snackbar from "./components/Snackbar/SnackBar";
import { Layout2 } from "./components/Layout/Layout";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/rootReducer";
import { alertActions } from "./redux/Alert/alert.action";
import Loading from "./components/LoadingPage/Loading";
const Wallet = lazy(() => import("./pages/Wallet"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: AppState) => state.alert.open);
  const loadingState = useSelector((state: AppState) => state.loading.loading);
  function closeSnackbar() {
    dispatch(alertActions.clear());
  }
  return (
    <Suspense fallback={<Loading />}>
      <HashRouter basename="/">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Layout2>
            <PrivateRoute path="/coin/:coinname" component={CoinDetails} />
            <PrivateRoute path="/wallet" component={Wallet} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Layout2>
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
      {snackbarState && <Snackbar onclick={closeSnackbar} />}
      {loadingState && <Loading />}
    </Suspense>
  );
}
