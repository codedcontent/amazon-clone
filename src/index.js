import React from "react";
import ReactDOM from "react-dom/client";
import "./firebase";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import MainAppWrapper from "./MainAppWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainAppWrapper />
    </StateProvider>
  </React.StrictMode>
);
