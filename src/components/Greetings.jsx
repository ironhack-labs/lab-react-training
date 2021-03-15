import React from 'react'

function Greetings(props) {
    let text ="";
    switch (props.lang) {
      case "de":
        text = 'Hallo';
          break;
      case "en":
        text = 'Hello';
          break;
      case "es":
        text = 'Hola';
          break;
      case "fr":
        text = 'Bonjour';
          break;
          case "gr":
        text = 'Kalimera';
          break;
      default:
        text = 'Hello';
          break;
  };

    return (
        <div style={{border: "1px solid black", textAlign:"left", margin:5, padding:"5px"}}>
            <p>{text} {props.children}</p>
        </div>
    )
}

export default Greetings
