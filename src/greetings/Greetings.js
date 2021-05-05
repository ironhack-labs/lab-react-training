import React from 'react';

const Greetings = (props) => {
  
  {
    if(props.lang === "de") {
      return <p className="greeting">Hallo {props.children}</p>
    } else if (props.lang === "fr") {
      return <p className="greeting">Bonjour {props.children}</p>
    }
  }
}

export default Greetings;