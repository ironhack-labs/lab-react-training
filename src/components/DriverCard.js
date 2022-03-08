function DriverCard(props) {
  return (
    <div className="driver-card">
      <div>
        <img src={props.img} alt="foto de perfil" />
      </div>
      <div className="driver-card-info">
        <h2>{props.name}</h2>
        <p>{props.number}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
