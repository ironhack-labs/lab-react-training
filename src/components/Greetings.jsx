import React from 'react';
import '../App.css';

const Greetings = (props) => {
  let greeting;
  if (props.lang === 'de') {
    return (
      <div className="greetings">
        <div>
          {(greeting = 'Hallo')} {props.children}
        </div>
      </div>
    );
  }
  if (props.lang === 'fr') {
    return (
      <div className="greetings">
        <div>
          {(greeting = 'Bonjour')} {props.children}
        </div>
      </div>
    );
  }
};

export default Greetings;
