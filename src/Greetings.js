import React from 'react'

export default function Greetings(props) {
   switch (props.lang) {
        case 'de':
            return <p>Hallo {props.children}</p>;
        case 'fr':
            return <p>Bonjour {props.children}</p>;
       default: return 'Hi'
           
   }
}

