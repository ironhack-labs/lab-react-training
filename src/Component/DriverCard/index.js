import React from 'react';
import Rating from '../Rating';

const divStyle = {
  borderRadius: '10px  ',
  padding: ' 30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  width: '500px',
  backgroundColor: 'blue',
  color: 'white',
};
const imgStyle = { margin: ' 20px', width: '6rem', heigth: '6rem', borderRadius: '50%' };

const DriverCard = props => {
  return (
    <div style={divStyle} className="drivercard">
      <img style={imgStyle} src={props.img} alt="imageDriver" />
      <div>
        {props.name}
        <Rating score={props.rating} />
        {props.car.model}/{props.car.licensePlate}
      </div>
    </div>
  );
};
export default DriverCard;
