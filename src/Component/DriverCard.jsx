import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const note = Math.round(rating);
  console.log(note);

  let stars = '';

  switch (note) {
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
    default:
      stars = '☆☆☆☆☆';
  }

  const style = {
    backgroundColor: `rgb(67,92,179)`,
    color: `white`
  };
  return (
    <div style={style}>
      <img src={img} alt="licence" /> <h2>{name}</h2>
      <p>{stars}</p>{' '}
      <p>
        {car.model} {car.licensePlate}
      </p>{' '}
    </div>
  );
};

export default DriverCard;
