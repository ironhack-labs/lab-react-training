const DriverCard = (props) => {
    const {name, rating, img, car} = props

    let roundedRating = Math.round(rating)
    let stars = ""
    switch (roundedRating) {
        case 0:
            stars = "☆☆☆☆☆"
            break;
        case 1:
            stars = "★☆☆☆☆"
            break;
        case 2:
            stars = "★★☆☆☆"
            break;
        case 3:
            stars = "★★★☆☆"
            break;
        case 4:
            stars = "★★★★☆"
            break;
        case 5:
            stars = "★★★★★"
            break;
        default:
            stars = "☆☆☆☆☆"
            break;
    }

    return (
        <div className="driverInfo">
            <div>
                <img className="driverImg" src={img} alt=""/>
            </div>
            <div className="info">
                <p>
                    <strong>{name}</strong>
                </p>
                <p>{stars}</p>
                <p>{car.model} {car.licensePlate}</p>

            </div>
        </div>
    )

}

export default DriverCard