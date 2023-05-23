import Rating from "../Rating/Rating"
const DriverCard = ({ name, rating, img, car }) => {
    return (
        <section className="drivercard">
            <img src={img} alt="" />
            <div className="drivercard-right">
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </section >
    )
}

export default DriverCard