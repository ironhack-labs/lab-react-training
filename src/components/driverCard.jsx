import Rating from "./rating";

function DriverCard(props) {
    const {name, rating, img, car} = props
  
    return (
    <div className="driverCard">
        <img src={img} alt='profile'></img>
        <div className="driverCardInfo">
            <h3>{name}</h3>
            <Rating>{rating}</Rating> 
            <p>{car.model} - {car.licensePlate}</p>
        </div>


    </div>
  )
}

export default DriverCard;