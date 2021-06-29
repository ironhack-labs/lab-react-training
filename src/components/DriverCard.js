import Rating from "./Rating"

function DriverCard ({name, rating, img, car}) {
    return (
        <div className="DriverCard">
            <img src={img} alt={name} />
            <div className="driverCard-text">
                <h2>{name}</h2>
                <Rating className="drivercrd-rating">{rating}</Rating>
                <div>
                    <p>{car.model} - {car.licensePlate}</p> 
                </div> 
            </div>
        </div>
    )
}

export default DriverCard