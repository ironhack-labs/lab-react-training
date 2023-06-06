function DriverCard(props) {
  return (
    <div className="driverLicense">
      <div>
        <img className="driverPic" src={props.img}></img>
      </div>
      <div className="driverInfo">
        <h2>{props.name}</h2>
        <p>{props.rating}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
