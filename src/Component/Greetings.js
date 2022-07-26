import React from "react";

function Greeting(props) {
    return (
      <div>
        <b>Hallo {props.children}!</b>
      </div>
    );
  }
  
  export default Greeting;
