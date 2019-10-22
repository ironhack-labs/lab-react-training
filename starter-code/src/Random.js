import React from "react";

const Random = props => {
  let randomNumber = Math.floor(Math.random() * Math.floor(props.max) + 1);
  return (
    <div className="Random">
      <p>
        Random number between {props.min} and {props.max} = {randomNumber}
      </p>
    </div>
  );
};

export default Random;
