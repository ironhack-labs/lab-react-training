import React from 'react';

function Drivercard({ name, rating, img, car }) {
  let rate = Math.round(rating);
  let frase;
 
  switch (rate) {
    case 0:
      frase = `☆☆☆☆☆`;
      break;
    case 1.49:
      frase = `★☆☆☆☆`;
      break;
    case 1.5:
      frase = `★★☆☆☆`;
      break;
    case 3:
      frase = `★★★☆☆`;
      break;
    case 4:
      frase = `★★★★☆`;
      break;
    case 5:
      frase = `★★★★★`;
      break;
    default:
      break;
  }
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h3>{frase}</h3>
        <p>{car.model} - {car.licensePlate}</p>
        <img src={img} alt={name} weight="100px" height="100px" />
      </div>
    </div>
  );
}

export default Drivercard;
