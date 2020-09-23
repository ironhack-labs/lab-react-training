import React from 'react';
// import './Greetings.css';

function Greetings(props) {
  return (
    <div className="languageGreetings">
      <p>
        {Greetings} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
