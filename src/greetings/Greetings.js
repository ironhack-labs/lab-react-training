import React from 'react';

const Greetings = (props) => {

  const languages = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    fr: 'Bonjour'
  }

  return <div className="greetings">
    <p>{languages[props.lang]} {props.children}</p>
  </div>
}
    

export default Greetings;


