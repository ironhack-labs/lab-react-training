import React from 'react';

function DriverCard({ name, rating, img, car }) {
  let redondeo = Math.round(rating);

  let frase;
  switch (redondeo) {
    case 0:
      frase = '☆☆☆☆☆';
      break;
    case 1:
      frase = '★☆☆☆☆';
      break;
    case 2:
      frase = '★★☆☆☆';
      break;
    case 3:
      frase = '★★★☆☆';
      break;
    case 4:
      frase = '★★★★☆';
      break;
    case 5:
      frase = '★★★★★';
      break;

    default:
      break;
  }

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h3>{frase}</h3>
        <p>
          {car.model} - {car.licensePlate}{' '}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
