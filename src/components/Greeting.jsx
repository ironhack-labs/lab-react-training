import React from 'react';
import "../assets/css/Greetings.css"

const Greeting = (props) => {
  console.log(props);

  function language(language) {
    if (language === 'fr') return '¡Bonjour';
    if (language === 'es') return 'Hola';
    if (language === 'col') return 'Cuente a ver';
    if (language === 'en') return 'Hello';
  }
  return (
    <div className="Greetings">
      <h4 className="Greeting">
        {language(props.language)} {props.children}
      </h4>
    </div>
  );
};

export default Greeting;
