import React from 'react';

function Greetings(props) {
  return props.lang === 'fr' ? (
    <div className="greetings">Bonjour {props.children}</div>
  ) : props.lang === 'de' ? (
    <div className="greetings">Halo {props.children}</div>
  ) : props.lang === 'en' ? (
    <div className="greetings">Hello {props.children}</div>
  ) : (
    props.lang === 'es'(<div>Hola {props.children}</div>)
  );
}

export default Greetings;
