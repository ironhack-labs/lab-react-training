import './DriverCar.css'

const DriverCard = ({ name, rating, img, car }) => {


    return (
        <section className="driverCard" >
            <img src={img} alt="Image" />
            <div className="driver-card">
                <p>{name}</p>
                <p>{rating}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>

        </section>
    )
}

export default DriverCard