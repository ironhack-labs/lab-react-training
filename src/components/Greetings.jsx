import React from 'react';

function Greetings(props) {
  if (props.lang === 'de') {
    return <div className="box"> Hallo {props.children}</div>;
  } else if (props.lang === 'fr') {
    return <div className="box"> Bonjour {props.children}</div>;
  } else if (props.lang === 'en') {
    return <div className="box"> Hello {props.children}</div>;
  } else if (props.lang === 'es') {
    return <div className="box"> Holà {props.children}</div>;
  }
}

export default Greetings;
