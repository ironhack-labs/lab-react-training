import React from 'react';

function Greetings(props) {
let greeting = (props);
switch (props.lang){
    case 'de':
        greeting = 'Hallo';
        break;
    case'en':
        greeting = 'Hello';
        break;
    case 'es':
        greeting = 'Hola';
        break;
    case'fr':
        greeting = 'Bonjour';
        break;
    default:
        return 'Hello';
}
return(
    <p>{greeting} {props.children}</p>
)
}

export default Greetings;

// Create a Greetings component with 2 props:

// lang: A string that can have values: "de", "en", "es" or "fr"
// children: A text
// The component should display a greeting text in the chosen language.