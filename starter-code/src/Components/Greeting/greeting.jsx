import React from 'react';

import './style.css';

function Greeting (data) {
  switch(data.lang) {
    case "de":
      return (
      <p>Hallo {data.children}</p>
      )
      break;
    case "fr":
      return (
        <p>bonjour {data.children}</p>
        )
      break;
    case "en":
      return (
        <p>hello {data.children}</p>
        )
      break;
    default:
      return (
        <p>hola {data.children}</p>
        )
  }
    
}

export default Greeting;

