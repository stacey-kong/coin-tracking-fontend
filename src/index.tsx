import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);