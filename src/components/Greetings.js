import React from 'react';

function Greetings(props) {
    return (
      <div>
        <p>{props.lang}, {props.name}!</p>
      </div>
    );
  }
   
  export default Greetings;