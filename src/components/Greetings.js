import React from 'react'

export default function Greetings(props) {
    
    switch (props.language) {
        case 'de':
          return <p class='greet'>Hallo {props.children}</p>;
        case 'en':
          return <p class='greet'>Hello {props.children}</p>;
        case 'fr':
          return <p class='greet'>Bonjour {props.children}</p>;
        case 'es':
          return <p class='greet'>Hola {props.children}</p>;
      }
}



