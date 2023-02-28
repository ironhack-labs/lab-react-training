import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  function giveStars(children) {
    if (children < 0.5) return `☆☆☆☆☆`;
    else if (children < 1.5) return `★☆☆☆☆`;
    else if (children < 2.5) return `★★☆☆☆`;
    else if (children < 3.5) return `★★★☆☆`;
    else if (children < 4.5) return `★★★★☆`;
    else return `★★★★★`;
  }

  return (
    <div className="driversCard">
      <div>
        <img src={img} alt="" className="driverImg" />
      </div>
      <div>
        <p>{name}</p>
        <p>{giveStars(rating)}</p>
        <h6>{`${car.model} - ${car.licensePlate}`}</h6>
      </div>
    </div>
  );
}

export default DriverCard;
