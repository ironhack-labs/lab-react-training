import Rating from "./Rating"


function DriverCard (props) {
    const { name, rating, img, car } = props

    return (
        <div className="driver-card">
            <img className="driver-img" src={img}></img>
            <div className="driver-detail">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>

        </div>
    )
}


export default DriverCard