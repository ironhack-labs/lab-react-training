import './DriverCard.css'

import Rating from '.././components/Rating';
function DriverCard({ name, rating, img, car }) {

    return (
        <div className="driverCard">
            <div className="driverCardContent">
                <div className="driverImage">
                    <img src={img} alt="" />
                </div>
                <div className="driverInfo">
                    <p><strong>{name}</strong></p>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>


        </div>


    )
}


export default DriverCard