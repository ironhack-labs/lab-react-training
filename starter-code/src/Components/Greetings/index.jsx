import React from "react";

function Greetings(props) {
  const lang = props.lang;
  const name = props.children;
  switch (lang) {
    case "de":
      //DO SOMETHING HERE
      return <span>Hallo {name}</span>;
    case "en":
      //DO SOMETHING HERE
      return <span>Hello {name}</span>;
    case "es":
      //DO SOMETHING HERE
      return <span>Hola {name}</span>;
    case "fr":
      //DO SOMETHING HERE
      return <span>Bonjour {name}</span>;
    default:
      //DO SOMETHING HERE
      return <span>Hello {name}</span>;
  }
}

export default Greetings;
