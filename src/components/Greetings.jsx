import React from 'react';

const greetings = (props) => {
  console.log(props);
  return (
    <p>
      {props.lang} {props.children}
    </p>
  );
};

export default greetings;
