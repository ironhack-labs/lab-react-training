import './DriverCard.css'
import Rating from './Rating'

const DriverCard = props => {
  const {
    name,
    rating,
    img,
    car,
  } = props



  return (
    <div class="DriverCard">
      <img class="left" src={img} />

      <div class="right">
        <h3>{name}</h3>
        <div class="Rating">{Rating(rating)}</div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>


  )
}

export default DriverCard