import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div style={{ background: "black", width: "100%", height: "100vh" }}>
        ola
      </div>
    </div>
  );
}

export default App;
