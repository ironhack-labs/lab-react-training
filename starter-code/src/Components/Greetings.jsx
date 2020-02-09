import React, { Component } from "react";

function Greetings(props) {
  const lang = props.lang;
  const children = props.children;
  switch (lang) {
    case "en":
      return "Hello" + children;
    case "fr":
      return "Bonjour" + children;
    case "de":
      return "Ludwig" + children;
    case "es":
      return "Hola" + children;
  }

}

export default Greetings;