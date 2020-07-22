import React from 'react';

const greetings = (props) => {
  function renderSwitch(param) {
    switch (param) {
      case 'de':
        return 'Halo';
        break;
      case 'en':
        return 'Hello';
        break;
      case 'es':
        return 'Hola';
        break;
      case 'fr':
        return 'Bonjour';
        break;
      default:
        return 'Hi';
    }
  }
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '20px',
        display: 'flex',
      }}
    >
      {renderSwitch(props.lang)} {props.children}
    </div>
  );
};

export default greetings;
