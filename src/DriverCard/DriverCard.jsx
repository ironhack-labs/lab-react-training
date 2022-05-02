import './DriverCard.css'


const DriverCard = ({ name, rating, img, car }) => {
    let roundRating = Math.round(rating)

    let stars;
    if (roundRating === 5) {
        stars = "★★★★★"
    }
    if (roundRating === 4) {
        stars = "★★★★☆"
    }
    if (roundRating === 3) {
        stars = "★★★☆☆"
    }
    if (roundRating === 2) {
        stars = "★★☆☆☆"
    }
    if (roundRating === 1) {
        stars = "★☆☆☆☆"
    }
    if (roundRating === 0) {
        stars = "☆☆☆☆☆"
    }

    return (
        <div class="driverCard">
            <p>{name}</p>
            <p>{stars}</p>
            <img src={img}></img>
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
        </div>
    )
}

export default DriverCard