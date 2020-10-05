import React from "react";

const Greetings = (props) => {
  if (props.lang === "de") {
    return <div className="props">Hallo {props.children}</div>;
  } else if (props.lang === "en") {
    return <div className="props">Hello {props.children}</div>;
  } else if (props.lang === "es") {
    return <div className="props">Holà {props.children}</div>;
  } else {
    return <div className="props">Bonjour {props.children}</div>;
  }
}

export default Greetings;
