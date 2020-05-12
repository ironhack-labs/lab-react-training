import React from 'react';

function greetings(lang) {
  switch (lang) {
    case 'de':
      return <div>"Hallo"</div>;
      break;
    case 'en':
      return <div>"Hello"</div>;
      break;
    case 'es':
      return <div>"Hola"</div>;
      break;
    case 'fr':
      return <div>"Bonjour"</div>;
      break;
    default:
      return '';
  }
}

const Greetings = (props) => {
  return (
    <div className="Greetings">
      <p>
        {greetings(props.lang)} {props.children}{' '}
      </p>
    </div>
  );
};

export default Greetings;
