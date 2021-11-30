function DriverCard(props) {
  return (
    <div className="card-driver">
      <img src={props.img} alt="" />
      <div className="small-div">
        {props.name}
        {props.rating}
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
}

export default DriverCard;
