import React from 'react';
import './Greetings.css';

const Greetings = props => {

  let message = '';
  let lang = props.lang;
  switch(lang) {
    case 'de': 
      message = "Hallo";
      break;
    case 'en':
      message = "Hello";
      break;
    case 'es':
      message = "Hola";
      break;
    case 'fr':
      message = "Bonjour";
      break;
    default:
      message = "Olá";
  }

  return (
    <article className='greeting__box'>
      <div className='greeting__line'>
        <p>{message} {props.name}</p>
      </div>
    </article>  
  )
}

export default Greetings;