import Rating from '../Rating/rating'
import './DriverCard.css'

const DriverCard = ({
    name,
    rating,
    img,
    car
}) => {

    const { model, licensePlate } = car

    return (
        <div className="row licenseCard justify-content-center">
            <div className="col-4">
                <div className="row licenseCardData">
                    <div className="col-4">
                        <figure><img src={img} alt="profile" /></figure>
                    </div>
                    <div className="col-8">
                        <h4><b>{name}</b></h4>
                        <h3><Rating>{rating}</Rating></h3>
                        <h5>{model} - {licensePlate}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCard