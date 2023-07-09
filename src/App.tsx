import React from "react";
import "./App.css";
import Home from "./page/home";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
