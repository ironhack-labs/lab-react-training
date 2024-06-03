import { useState } from "react";

const Random = ({ min, max }) => {
  
  const numeroAleatorio = (min, max) => {
    return (Math.round(Math.random() * (max - min) + min));
  }
  const randomNumber = numeroAleatorio(min, max);
  return (
    <div className="border border-2 col-md-6 p-2 m-auto">
      Random number between {min} and {max} => {randomNumber}
    </div>
  );
};

export default Random;
