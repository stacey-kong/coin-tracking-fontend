import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout2 } from "./components/Layout/Layout";
import Loading from "./components/LoadingPage/Loading";


// redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/rootReducer";
import { alertActions } from "./redux/Alert/alert.action";


//lazy import component to improve code spilting
const PrivateRoute = lazy(() => import("./components/PrivateRoute/PrivateRoute"));
const Snackbar = lazy(() => import("./components/Snackbar/SnackBar"));
const CoinDetails = lazy(() => import("./pages/Coindetails"));
const Lending = lazy(() => import("./pages/Lending"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

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
            <PrivateRoute path="/lending" component={Lending} />
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
