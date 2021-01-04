import React from 'react';

const Greetings = (props) => {
  if (props.lang === 'de') {
    return (
      <div className="box">
        <p>Hallo {props.children}</p>
      </div>
    );
  } else if (props.lang === 'en') {
    return (
      <div className="box">
        <p>Hello {props.children}</p>
      </div>
    );
  } else if (props.lang === 'es') {
    return (
      <div className="box">
        <p>Hola {props.children}</p>
      </div>
    );
  } else if (props.lang === 'fr') {
    return (
      <div className="box">
        <p>Bonjour {props.children}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Greetings;
