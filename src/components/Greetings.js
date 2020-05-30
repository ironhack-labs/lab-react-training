import React from 'react';
import './Greetings.css';

function Greetings (props) {
    let greet;
    switch (props.lang) {
        case 'de':
          greet = 'hallo '
          break
        case 'en':
          greet = 'hello '
          break
        case 'es':
          greet = 'hola '
          break
        case 'fr':
          greet = 'bonjour '
          break
        default:
          greet = 'olá'
      }
      return (
        <div className="GreetingsDiv">
          {greet} 
          {props.children}
          <br/>
        </div>
      )
}

export default Greetings;
