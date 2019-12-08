import React from "react";

function Greetings (props){
  let saludito;
    switch (props.lang){
      case "de" : saludito = "Hallo";
      break;
      case "en" : saludito = "Hello";
      break;
      case "es" : saludito = "Hola";
      break;
      case "fr" : saludito = "Bonjour";
      break;
      default : saludito = "Holis";
    }
  return(
    <div className="Greetings">
           {saludito} {props.children}
     </div>
  );
}
export default Greetings;