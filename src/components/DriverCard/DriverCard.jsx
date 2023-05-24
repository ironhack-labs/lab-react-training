import './DriverCard.css'
const DriverCard = ({ name, rating, img, car }) => {

    const roundedRating = Math.round(rating)

    let stars
    if (roundedRating === 1) stars = '☆☆☆☆☆'
    if (roundedRating === 2) stars = '★☆☆☆☆'
    if (roundedRating === 3) stars = '★★☆☆☆'
    if (roundedRating === 4) stars = '★★★☆☆'
    if (roundedRating === 5) stars = '★★★★☆'
    if (roundedRating === 5) stars = '★★★★★'


    return (
        <div className="driverCard">
            <div className="driverImg">
                <img src={img} alt="" />
            </div>
            <div className="driverBody">
                <p>{name}</p>
                <p>{stars}</p>
                <p>{car.model} | {car.licensePlate}</p>
            </div>
        </div>
    )

}
export default DriverCard