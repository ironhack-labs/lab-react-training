import React from 'react';

const Random = ({ min, max }) => (
  <h3 className="Random">
    {`Random value between ${min} and ${max} => ${
      Math.floor(Math.random() * (Number(max) - Number(min))) + Number(min)
    }`}
  </h3>
);

export default Random;
