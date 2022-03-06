function DriverCard(props) {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>{props.number}</p>
      <img src={props.img} alt="foto de perfil" />
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}
export default DriverCard;
