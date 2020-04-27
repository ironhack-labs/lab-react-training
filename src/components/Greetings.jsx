import React from "react";

const checkLang = (lang) => {
  if (lang === "de") {
    return "Hallo";
  } else if (lang === "fr") {
    return "Bonjour";
  } else if (lang === "es") {
    return "Hola";
  } else if (lang === "en") {
    return "Hello";
  }
};

export default function Greetings(props) {
  
  return (
    <div>
      <h2>{checkLang(props.lang)} {props.children} </h2>
    </div>
  );
}