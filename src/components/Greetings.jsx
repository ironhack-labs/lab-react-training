import React from 'react';

function Greetings(props) {
  let helloWord = 'Hello';

  if (props.lang === 'fr') {
    helloWord = 'Bonjour';
  } else if (props.lang === 'es') {
    helloWord = 'Hola';
  } else if (props.lang === 'de') {
    helloWord = 'Hallo';
  }

  return (
    <h1 className="hello">
      {helloWord} {props.children}
    </h1>
  );
}

export default Greetings;

// function Greetings() {
//   return <h1>Hola {props.name}</h1>;
// }

// export default Greetings;
