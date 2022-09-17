import Rating from './Rating';

function DriverCard(props) {
  return (
    <div
      style={{
        display: 'flex',
        margin: '10px',
        border: '1px black solid',
      }}
    >
      <img src={props.img} alt="driver" style={{ width: '500px' }} />
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
