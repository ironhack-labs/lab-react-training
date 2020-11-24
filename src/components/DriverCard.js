import React from 'react';

const DriverCard = (props) => {
  const roundedRate = Math.round(props.rate);

  return (
    <div
      className="my-2 justify-content-center row text-center py-4 rounded"
      style={{ backgroundColor: '#455EB5' }}
    >
      <div
        className="overflow-hidden rounded-circle my-auto"
        style={{
          height: '8rem',
          width: '8rem',
        }}
      >
        <img
          className="img-fluid"
          style={{ height: '100%', width: '100%' }}
          src={props.img}
        />
      </div>
      <div className="my-auto text-left ml-2">
        <h4 className="font-weight-bold">{props.name}</h4>
        <h3>
          {roundedRate > 0
            ? '★★★★★'.slice(-roundedRate).concat('☆☆☆☆☆'.slice(roundedRate))
            : '☆☆☆☆☆'}
        </h3>
        <small>
          {props.car.model} - {props.car.licensePlate}
        </small>
      </div>
    </div>
  );
};

export default DriverCard;
