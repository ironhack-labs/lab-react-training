import React from 'react';


function DriverCard({img, name, rating, model, licensePlate}) {
  return (
    <div>
      <div>
        <img src={img} style={{ width: '6vw' }}></img>
      </div>
      {name}
      <rating>{rating}</rating>
      {model} - {licensePlate}
    </div>
  );
}

export default DriverCard;
