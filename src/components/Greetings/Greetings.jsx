import React from 'react';
import classes from './Greetings.module.css';

const Greetings = (props) => {
  const returnGreeting = (lang) => {
    switch (lang) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      case 'it':
        return 'Ciao';
      default:
        return 'Hello';
    }
  };
  return (
    <div className={classes.container}>
      <h3>
        {returnGreeting(props.lang)} {props.children}
      </h3>
    </div>
  );
};

export default Greetings;
