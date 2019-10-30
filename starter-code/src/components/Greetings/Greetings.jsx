import React from 'react'
import './Greetings.css'

const Greetings = (props) => {
  
  let text = '';

  switch (props.lang) {
    case 'de':
      text = 'Hallo';
      break;
    case 'fr':
      text = 'Bonjour';
      break;
    case 'es':
      text = 'Hola';
      break;  
    case 'en':
      text = 'Hello';
      break;
    default:
      text = 'Language not defined';
  } 

  return (
    <div className='box'>
      {text} {props.children}
    </div>
  )
}

export default Greetings;