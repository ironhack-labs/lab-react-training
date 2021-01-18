import React from 'react';
import './Greetings.css'


function Greetings(props) {
  let language = '';
    if (props.lang == 'de'){
        language = 'Hallo '
    } else if (props.lang == 'en') {
        language = 'Hello '
    } else if (props.lang == 'es') {
        language = 'Ola '
    } else if (props.lang == 'fr') {
        language = 'Bonjour '
    } 

    return (
      <div className='Greetings box'>
         <p>{language}{props.children}</p>
      </div>
    );
  }


export {Greetings}