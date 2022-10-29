import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);
  const buttonClickHandler = () => {
    setText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!text && <p>Prashant</p>}
      {text && <p>Prashant Aghara</p>}
      <button onClick={buttonClickHandler}>Click</button>
    </div>
  );
};

export default Greeting;
