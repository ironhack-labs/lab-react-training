import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const rate = Math.round(rating);

  let setRating = '';
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      setRating += '★';
    } else {
      setRating += '☆';
    }
  }
  return (
    <div
      style={{
        backgroundColor: '#4C50A9',
        width: '900px',
        borderRadius: 10,
        color: 'white',
        padding: '20px',
        height: '250px',
        width: '250px',
        margin: '20px',
      }}
    >
      <div>
        <img style={{ borderRadius: 100, width: '100px' }} src={img} />
      </div>

      <p>{name}</p>
      <p>{setRating}</p>
      <p style={{ fontSize: '15px' }}>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
