import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    const stars = Math.ceil(rating)

    function starDraw(fullStars) {
        return ("\u2605").repeat(fullStars) + ("\u2606").repeat(5 - fullStars)
    }


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