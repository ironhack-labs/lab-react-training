import React from 'react';
import './Greetings.css'

const Greetings = ({lang, children}) =>{
   
    let greet = '';

    switch (lang) {
        case 'de':
          greet = 'Hallo';
          break;
        case 'en':
            greet = 'Hello';
            break;
        case 'es':
            greet = 'Ola';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        default:
            greet = '';
      }

    return (
        <div class="Greetings">
            <p>{greet} {children}</p>
        </div>
    );
};

export default Greetings;
