import Rating from "../Rating/Rating"
import "./DriverCard.css"

const DriverCard = ({ driverCards }) => {
    const { name, rating, img, car } = driverCards
    const { model, licensePlate } = car
    return (
        <div className="driver-body">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <div className="rate">
                    <Rating rating={rating} />
                    <p>{model}-{licensePlate}</p>
                </div>
            </div>
        </div>
    )

}
export default DriverCard