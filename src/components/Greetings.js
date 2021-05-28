import React from 'react'

export default function Greetings(props) {
    
    switch (props.language) {
        case 'de':
          return <p class='border border-dark p-2 m-4'>Hallo {props.children}</p>;
        case 'en':
          return <p class='border border-dark p-2 m-4'>Hello {props.children}</p>;
        case 'fr':
          return <p class='border border-dark p-2 m-4'>Bonjour {props.children}</p>;
        case 'es':
          return <p class='border border-dark p-2 m-4'>Hola {props.children}</p>;
      }
}



