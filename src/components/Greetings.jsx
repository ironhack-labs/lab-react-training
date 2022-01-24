import React from "react";

const Greetings = (props) => {
 const Langue = () =>{
   switch (props.lang) {
        case "de":
           return `Halo`
        case "en":
           return `Hello`
        case "es":
           return `Hola`
        default:
           return `Bonjour`
      }}
  return (
  <p>{Langue()} {props.children}</p>
  );
};

export default Greetings;
