import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./stylesheet.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    return worker.start();
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});

reportWebVitals();
