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


{/* <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/> */}