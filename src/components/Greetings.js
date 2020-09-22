import React from 'react';

function Greetings(props) {
  let greet = '';
  switch(props.lang){
    case "de": greet = 'Hallo'; break;
    case "fr": greet = 'Bonjour'; break;
    case "es": greet = 'Buenos dias'; break;
    default: greet = 'Hello';
  }

  return (
    <div>{greet} {props.children}</div>
  );
}

export default Greetings;