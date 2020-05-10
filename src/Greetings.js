//Iteration 2 | Component: Greetings

import React from "react";

const Greetings = (props) => {
  const language = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return (
    <div>
      <p>{language[props.lang]}, {props.children}</p>
    </div>
  );
};

export default Greetings;
