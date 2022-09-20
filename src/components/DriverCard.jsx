import Rating from './Rating';


const DriverCard = (props) => {
    const { model, licensePlate } = props.car;
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.rating}</p>
      {<img src={props.img} />}
          <p>{model}</p>
          <p>{licensePlate}</p>
    </div>
  );
};

export default DriverCard;
