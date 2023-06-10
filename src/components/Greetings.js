import React from 'react';

function Greetings(props) {
  let message = 'Bonjour';
  switch (props.lang) {
    case 'fr':
      message = 'Bonjour';
      break;
    case 'de':
      message = 'Hallo';
      break;
    case 'en':
      message = 'Hello';
      break;
    case 'es':
      message = 'Buenos dias';
      break;
    default:
      message = 'Bonjour';
  }
  return (
    <div className='Iteration2'>
        <p>{message} {props.children}</p>;
    </div>
  )
}

export default Greetings;
