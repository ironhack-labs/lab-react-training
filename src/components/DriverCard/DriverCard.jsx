const DriverCard = ({ name, rating, img, car }) => {
    return (
        <section className="drivercard">
            <img src={img} alt="" />
            <div className="drivercard-right">
                <p>{name}</p>
                <p>{rating}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </section >
    )
}

export default DriverCard