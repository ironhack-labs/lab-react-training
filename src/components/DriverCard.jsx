function DriverCard(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt="profile picture" />
        <div>
          <h3>{props.name}</h3>
          <p>{props.rating}</p>
          <span>{props.car.model} </span>{' '}
          <span>- {props.car.licensePlate}</span>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
