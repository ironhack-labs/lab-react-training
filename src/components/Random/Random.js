import React from "react";
import '../Greetings/Greetings.css';

const Random = ({min, max}) => {
 
  return (
    <div className="allGreetings">
    <div>
    <p>Random value between {min} and {max} {"=>"} {Math.floor(Math.random() * max) + min}</p>
     </div>
    </div>
  );
};

export default Random;