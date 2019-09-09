import React from "react";

import CounterHook from "./Components/CounterHooks.js";
import FormHook from "./Components/FormHook.js";
imoprt giphy from "./Components/giphy.js"
import "./App.css";

//useEffect is the componentLifeCycle

function App() {
  return (
    <div className="App">
      <CounterHook />
      <FormHook />
    </div>
  );
}

export default App;
