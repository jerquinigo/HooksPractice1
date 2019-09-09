import React, { useState } from "react";
import inputHook from "../hooks/useInputHook.js";

const FormHook = () => {
  const [inputValue, setInputValue] = useState("");

  //this one is the same as handle change in a classfull component
  const [email, updateEmail] = inputHook("");

  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <h1>{email}</h1>
      <input type="text" value={email} onChange={updateEmail} />
    </div>
  );
};

export default FormHook;
