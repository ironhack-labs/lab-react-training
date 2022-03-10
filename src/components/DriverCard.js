import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <div>
        <img className="driver-img" src={img} alt="Driver"/>
      </div>
      <div>
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard