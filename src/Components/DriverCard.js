import Rating from "./Rating";

function DriverCard(props) {
  const {name,rating,img,car} = props;


    return (
    <div className="driver-card">
      <div className="driver-picture">
      <img src={props.img} alt="driver picture"/>
      </div>
      <div className="body">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model}-{props.car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
