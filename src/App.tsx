import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import AppRoutes from "routes/routes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
