import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div class="driverCard">
        <img src={img} alt="" className='imgDriver'/>
        <section>
      <h2>{name}</h2>
      {rating < 5 && rating >= 4 && <h2>★★★★☆</h2>}
      {rating >= 5 && <h2>★★★★★</h2>}
    <h3>{car.model}-{car.licensePlate}</h3>
    </section>
    </div>
  );
}

export default DriverCard;