import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <p> {name} </p>
      <Rating>{rating}</Rating>
      <img style={{ height: '100px', width: '100px' }} src={img} />
      <p>
        {' '}
        {car.model} - {car.licensePlate}{' '}
      </p>
    </div>
  );
};

export default DriverCard;
