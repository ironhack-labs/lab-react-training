import React from 'react';

export default function Greeting(props) {
    let greeting
  switch(props.lang){
      case 'de': greeting = "Hallo";
      break;
      case 'en': greeting = 'Hello'
      break;
      case 'fr': greeting = 'Bonjour';
      break;
      case 'es': greeting = 'Hola';
  };
    return (
        <div className="greeting">
            <p>{greeting} {props.children}</p>
        </div>

    )
}
