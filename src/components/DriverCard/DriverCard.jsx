import Rating from "../Rating/Rating"
import './DriverCard.css'

function DriverCard({ driverInfo }) {
    const { name, rating, img, car } = driverInfo
    const { model, licensePlate } = car

    return (
        <div className="DriverCard">
            <div className="DriverImg">
                <img src={img} alt={name} />
            </div>
            <div className="DriverInfo">
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <div>
                    <p>{model}-{licensePlate}</p>
                </div>
            </div>
        </div>
    )

}

export default DriverCard