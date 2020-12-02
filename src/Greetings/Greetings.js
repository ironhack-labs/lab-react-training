import React from 'react';
import './Greetings.css';

function Greetings(props) {
  if (props.lang === 'de')
    return (
      <div className="greetings">
        <p>Hallo {props.children}</p>
      </div>
    );
  else if (props.lang === 'en')
    return (
      <div className="greetings">
        <p>Hello {props.children}</p>
      </div>
    );
  else if (props.lang === 'es')
    return (
      <div className="greetings">
        <p>Halo {props.children}</p>
      </div>
    );
  else if (props.lang === 'fr')
    return (
      <div className="greetings">
        <p>Bonjour {props.children}</p>
      </div>
    );
}

export default Greetings;
