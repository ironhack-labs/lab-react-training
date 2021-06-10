import React from 'react';

const greetings = (props) => {
  const name = props.lang;

  console.log(name);

  if (name === 'de') {
    return <p>Hallo {props.children} </p>;
  } else if (name === 'fr') {
    return <p>Bonjour {props.children}</p>;
  }
  // return <p>{props.children}</p>;
  return (
    <h1>
      {name} {props.children}
    </h1>
  );
};

export default greetings;
