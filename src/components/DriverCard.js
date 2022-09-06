function DriverCard(props) {

  const maxStars = 5;
  const emptyStar = "☆";
  const filledStar = "★";

  return(
    <div className="driver-card">
      <img src={props.img} alt="idPhoto" width="150"/>
      {props.name}
      <p>
        {filledStar.repeat(Math.round(props.rating))}
        {emptyStar.repeat(maxStars - Math.round(props.rating))}
      </p>
      {props.car.model}
      {props.car.licensePlate}
    </div>
  )
  }
  
  export default DriverCard;