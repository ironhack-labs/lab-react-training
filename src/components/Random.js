import React from "react";

function Random(props) {

const getRandomInt = Math.floor(Math.random() * (props.max - props.min) + props.min); 
};


return (
  <div className="Random">
        <p> value between {props.min} {props.max} = {getRandomInt}</p>
      </div>
    );

  
  export default Random;