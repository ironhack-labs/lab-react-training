import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {

    return (

        <div className="driverCard">
            <div className="profilePicture"><img src={img} alt="" /></div>
            <div className="driverData">
                <p className="driverName"><strong>{name}</strong></p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;