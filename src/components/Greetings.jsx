import React from 'react';

const Greetings = (props) => {
  switch (props.lang) {
    case 'de':
      return (
        <div className="container">
          <p>{`Hallo ${props.children}`}</p>
        </div>
      );
    case 'en':
      return (
        <div className="container">
          <p>{`Hello ${props.children}`}</p>
        </div>
      );
    case 'es':
      return (
        <div className="container">
          <p>{`Hola ${props.children}`}</p>
        </div>
      );
    case 'fr':
      return (
        <div className="container">
          <p>{`Bonjour ${props.children}`}</p>
        </div>
      );
  }
  return <div className="container"></div>;
};

export default Greetings;
