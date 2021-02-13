import React from "react";
import ReactDOM from "react-dom";
import { GeistProvider } from "@geist-ui/react";
import App from "./App";
import Loading from "./components/Loading";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <Login />
    {/* <GeistProvider>
      <App />
    </GeistProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
