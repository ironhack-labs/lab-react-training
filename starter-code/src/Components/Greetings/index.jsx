import React from 'react';

function Greetings(props) {
  console.log(props);
  switch (props.lang) {
    case 'de':
      return <div>Hallo, {props.children}</div>;
    case 'en':
      return <div>Hello, {props.children}</div>;
    case 'fr':
      return <div> Bonjour, {props.children}</div>;
    case 'es':
      return <div>Hola, {props.children}</div>;

    default:
      return <div>yoyo</div>;
  }
}

export default Greetings;
