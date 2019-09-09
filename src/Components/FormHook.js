import React, { useState } from "react";

const FormHook = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default FormHook;
