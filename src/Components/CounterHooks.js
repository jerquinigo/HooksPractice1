import React, { useState } from "react";

const CounterHook = () => {
  //param1 is a reference to our piece of state
  // param 2 is a function that can change the value of that state
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount(count + 2);
  };
  return (
    <div>
      <button onClick={addOneHandler}>counter: {count}</button>
    </div>
  );
};

export default CounterHook;
