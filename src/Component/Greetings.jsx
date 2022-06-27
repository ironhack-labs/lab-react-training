import React from 'react';

const Greetings = (props) => {
  switch (props.lang) {
    case 'de':
      <div className="container">
        <p> {`Halo ${props.children}`} </p>
      </div>;
      break;
    case 'en':
      <div className="container">
        <p> {`Hello ${props.children}`} </p>
      </div>;
      break;
    case 'es':
      <div className="container">
        <p> {`Hola ${props.children}`} </p>
      </div>;
      break;
    case 'fr':
      <div className="container">
        <p> {`Bonjour ${props.children}`} </p>
      </div>;
      break;
    default:
  }

  return <div className="container"></div>;
};

export default Greetings;
