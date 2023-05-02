function DriverCard(props) {
  return (
    <div className="DriverCard">
      <p>Name: {props.name}</p>
      <p>Rating: {props.rating}</p>
      <img src={props.img} alt="carImage" width="200" />
      <p>{props.model}</p>
      <p> {props.licensePlate}</p>


    </div>
  );
}

export default DriverCard;
