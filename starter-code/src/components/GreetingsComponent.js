import React from 'react';
import { GreetingsC } from "../styles/components"


function GreetingsComponent(props) {
  let greeting = '';
  switch(props.lang){
    //de","en","es","fr"
    case 'de':
        greeting = 'Hallo';
      break;
    case 'en':
        greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
      break;
  }
  return (
    <GreetingsC>
      <p>{greeting}_{props.children}</p>
    </GreetingsC>
  );
}
export default GreetingsComponent;