import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="driverCard">
            <div className="driverImg">
                <img src={img} alt='driver' />
            </div>
            <div className='data'>
                <h4>{name}</h4>
                <p>{rating}</p>
                <h5>{car.model} - {car.licensePlate}</h5>
            </div>
        </div>
    )
}


export default DriverCard