import React from "react";

function Greetings(props) {
console.log(props)
  if (props.lang ==="de") return ( `Hallo` +  ` ${props.children}`);
  // if (props.lang ==="en") return "Hello"+ <div> {props.children}</div> ;
  if (props.lang ==="fr") return ("Bonjour" + ` ${props.children}`) ;
}

export default Greetings;