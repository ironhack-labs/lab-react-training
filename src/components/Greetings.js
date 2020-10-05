import React from "react";

const Greetings = (props) => {
  if (props.lang === "de") {
    return <div>Hallo {props.children}</div>;
  } else if (props.lang === "en") {
    return <div>Hello {props.children}</div>;
  } else if (props.lang === "es") {
    return <div>Holà {props.children}</div>;
  } else {
    return <div>Bonjour {props.children}</div>;
  }
}

export default Greetings;
