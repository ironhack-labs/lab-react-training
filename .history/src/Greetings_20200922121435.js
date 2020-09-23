import React from 'react';
// import './Greetings.css';

function Greetings(props) {
  let greetings = '';
  return (
    <div className="languageGreetings">
      <p>
        {greetings} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
