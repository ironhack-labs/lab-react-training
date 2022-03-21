import Rating from "./Rating";


export default function DriverCard(props) {
  return (
    <div className="rectangle">
    <img src={props.img} alt="" />
    <h2>{props.name}</h2>
    <Rating>{props.rating}</Rating>
    <p>{props.car.model} {props.car.licensePlate}</p>
    </div>
  )
}
