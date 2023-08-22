import {useState} from 'react';

function Greetings (props){

  

  function language () {
    if (props.lang === 'de') return 'Hallo';
    else if (props.lang === 'es') return 'Hola';
    else if (props.lang === 'fr') return 'Bonjour';
    else return 'Hello';
  }

  return (
    <div>
      <p>{language()} {props.children}</p>
    </div>
  )
}

export default Greetings;