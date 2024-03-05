import React from 'react';

function Greetings(props) {
  const lang = props.lang;
  const name = props.children;

  console.log(lang)

  let message = '';

  switch (lang) {
    case 'France':
      message = 'Bonjour';
      break;
    case 'Germany':
      message = 'Hallo';
      break;
    case 'Catalonia':
      message = 'Hola';
      break;
    default:
      message = 'Hello';
      break;
  }

  return (
    <div className='box'>
        {message} {name}
    </div>
  );
}

export default Greetings;

