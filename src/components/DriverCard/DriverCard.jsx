
import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {

    const roundRating = Math.round(rating)



    let stars
    if (roundRating === 0) {
        stars = "☆☆☆☆☆"
    }

    if (roundRating === 1) {
        stars = "★☆☆☆☆"
    }
    if (roundRating === 2) {
        stars = "★★☆☆☆"
    }
    if (roundRating === 3) {
        stars = "★★★☆☆"
    }
    if (roundRating === 4) {
        stars = "★★★★☆"
    }
    if (roundRating === 5) {
        stars = "★★★★★"
    }



    return (
        <div className="DriverCard">

            <div className="DriverImage">
                <img src={img} alt="" />
            </div>

            <div className="DriverText">
                <p>  <strong> {name} </strong></p>
                <p>{stars}</p>
                <p>{car.model} | {car.licensePlate}</p>

            </div>
        </div>
    )


}


export default DriverCard