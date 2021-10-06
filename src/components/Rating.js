import React from 'react';

function Rating({ children }) {
  let redondeo = Math.round(children);

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
      <h1> {frase}</h1>
    </div>
  );
}

export default Rating;
