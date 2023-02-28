import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  function star(children) {
    if (children < 0.5) return '☆☆☆☆☆';
    else if (children < 1.5) return '★☆☆☆☆';
    else if (children < 2.5) return '★★☆☆☆';
    else if (children < 3.5) return '★★★☆☆';
    else if (children < 4.5) return '★★★★☆';
    else return '★★★★★';
  }

  return (
    <div className='drivercard'>
      <img className='driver-card-img' src={img} alt="driverImg" />
      <div className='driver-details'>
        <h2>{name}</h2>
        <p>{star(rating)}</p>
        <h3>
          {car.model} - {car.licensePlate}
        </h3>
      </div>
    </div>
  );
}

export default DriverCard;
