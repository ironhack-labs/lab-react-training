import React from 'react';

const random = (props) => {
  const randomNum = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="border border-black rounded-md my-4 p-2">
      <p>
        Random Value between {props.min} and {props.max} => {randomNum}
      </p>
    </div>
  );
};
export default random;
