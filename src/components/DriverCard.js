function DriverCard(props) {
  return (
    <div className="DriverCard">
      {props.name}
      {props.rating}
      <img style={{maxWidth: "400px"}} src={props.img} alt=""/>
      {props.car.model}
      {props.car.licensePlate}
    </div>
  );
}

export default DriverCard;
