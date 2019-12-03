import React from "react";
import './style.scss';

function Greetings(props) {
  console.log(props);
  switch (props.lang) {
    case "en":
      return <h3>Hello {props.children}</h3>;

    case "de":
      return <h3>Hallo {props.children}</h3>;

    case "es":
      return <h3>Hola {props.children}</h3>;

    case "fr":
      return <h3>Bonjour {props.children}</h3>;

    default:
      return <h3>Language not found {props.children}</h3>;
  }
}

export default Greetings;
