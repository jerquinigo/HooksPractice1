import React from "react";

import CounterHook from "./Components/CounterHooks.js";
import FormHook from "./Components/FormHook.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterHook />
      <FormHook />
    </div>
  );
}

export default App;
