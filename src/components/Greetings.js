import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let helloWord = 'Hello';

  switch (props) {
    case 'de':
      helloWord = 'Halo';
      break;
    case 'en':
      helloWord = 'Hello';
      break;
    case 'es':
      helloWord = 'Hola';
      break;
    case 'fr':
      helloWord = 'Alô';
  }

  return (
    <div className="greetings-card">
      <h5>
        {helloWord} {props.children}
      </h5>
    </div>
  );
};

export default Greetings;
