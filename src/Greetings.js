import React from 'react';

const Greetings = (props) => {
  let greeting;
  if (props.lang === 'de') {
    greeting = 'Hallo';
  } else {
    greeting = 'Ciao';
  }
  return (
    <div className="Greetings">
      <p>
        {greeting}, {props.children}
      </p>
    </div>
  );
};

export default Greetings;
