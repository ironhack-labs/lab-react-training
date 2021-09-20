import React from 'react';

const Iteration = (props) => {
  return (
    <h4 className="heading">
      Iteration {props.number} {props.children}
    </h4>
  );
};

export default Iteration;
