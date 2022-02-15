import React from 'react';

function DriverCard(props) {
  
  const displayRating = (numberOfStars) => {
    numberOfStars = parseFloat(numberOfStars);
    numberOfStars = Math.round(numberOfStars);

    return '★'.repeat(numberOfStars) + '☆'.repeat(5 - numberOfStars);
  };

    return (
      <div className="driver-card">
        <div>
          <img src={props.img} alt={props.name + 'photo'} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <h3>{displayRating(props.rating)}</h3>
          <p>{props.car.model + ' - ' + props.car.licensePlate}</p>
        </div>
      </div>
    );
}

export default DriverCard;
