import React from 'react';

const greetings = (props) => {
  const name = props.lang;
  console.log(name);

  if (name === 'de') {
    return <p>Hallo {props.children} </p>;
  } else if (name === 'fr') {
    return <p>Bonjour {props.children}</p>;
  }
  // return <p>{props.children}</p>;

  return (
    <div className="border border-black rounded-md my-4 p-2">
      <h1 className="border border-black rounded-md my-4 p-2">
        {name} {props.children}
      </h1>
    </div>
  );
};

export default greetings;
