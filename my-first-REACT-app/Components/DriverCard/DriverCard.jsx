const DriverCard = ({ name, rating, img, car }) => {

    let carInfo = `${car.model} - ${car.licensePlate}`

    const roundedRating = Math.round(rating)
    let countStars

    if (roundedRating === 0) {
        countStars = "☆☆☆☆☆"
    } else if (roundedRating === 1) {
        countStars = "★☆☆☆☆"
    } else if (roundedRating === 2) {
        countStars = "★★☆☆☆"
    } else if (roundedRating === 3) {
        countStars = "★★★☆☆"
    } else if (roundedRating === 4) {
        countStars = "★★★★☆"
    } else if (roundedRating >= 5) {
        countStars = "★★★★★"
    }

    return (
        <div>
            <img src="" alt="" />
            <p>{name}</p>
            <p>{countStars}</p>
            <p>{carInfo}</p>
        </div>
    )
}

export default DriverCard