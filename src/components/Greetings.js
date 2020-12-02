import React from 'react';

function Greetings(props) {
  function languages(language) {
    switch (language) {
      case 'de':
        return 'Halo';
      case 'fr':
        return 'Bonjour';
      default:
    }
  }

  return (
    <div className="Greetings">
      <p>
        {languages(props.language)} {props.children}{' '}
      </p>
    </div>
  );
}

export default Greetings;
