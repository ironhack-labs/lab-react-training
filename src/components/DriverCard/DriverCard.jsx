import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    const ratingRound = Math.round(Number(rating))

    let stars = ""

    if (ratingRound === 0) {
        stars = "☆☆☆☆☆"
    }
    if (ratingRound === 1) {
        stars = "★☆☆☆☆"
    }
    if (ratingRound === 2) {
        stars = "★★☆☆☆"
    }
    if (ratingRound === 3) {
        stars = "★★★☆☆"
    }
    if (ratingRound === 4) {
        stars = "★★★★☆"
    }
    if (ratingRound === 5) {
        stars = "★★★★★"
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={img} />
            <p>{stars}</p>
            <p>{car.model}{car.licensePlate}</p>
        </div>
    )

}


export default DriverCard