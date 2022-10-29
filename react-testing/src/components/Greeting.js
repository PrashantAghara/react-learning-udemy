import React from "react";
import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [text, setText] = useState(false);
  const buttonClickHandler = () => {
    setText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!text && <Output>Prashant</Output>}
      {text && <Output>Prashant Aghara</Output>}
      <button onClick={buttonClickHandler}>Click</button>
    </div>
  );
};

export default Greeting;
