import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="Card">
            <div className="driverImg">
                <img src={img} alt='image' />
            </div>
            <div className="Info">
                <h5>{name}</h5>
                <p>{rating}</p>
                <h6>{car.model} - {car.licensePlate}</h6>
            </div>
        </div>
    )
}

export default DriverCard