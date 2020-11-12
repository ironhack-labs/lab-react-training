import React from 'react';

function DriverCard(props) {
  function stars(num) {
    switch (num) {
      case 1:
        return '★☆☆☆☆';
        break;
      case 2:
        return '★★☆☆☆';
        break;
      case 3:
        return '★★★☆☆';
        break;
      case 4:
        return '★★★★☆';
        break;
      case 5:
        return '★★★★★';
        break;
      default:
        return '☆☆☆☆☆';
        break;
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#455EB5',
        borderRadius: '10px',
        margin: '0.8%',
        padding: '1.5%',
        display: 'flex',
        justifyContent: 'center',
        height: '100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={props.img}
          style={{
            width: '100px',
            borderRadius: '50%',
            marginRight: '4%',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '235px',
            color: 'white',
          }}
        >
          <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}>
            {props.name}
          </div>
          <div style={{ fontSize: '2em' }}>
            {' '}
            {stars(Math.round(props.rating))}
          </div>
          <div>
            {props.car.model} - {props.car.licensePlate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
