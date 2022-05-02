import "../styles/DriverCar.css"
const DriverCar = ({ name, rating, img, car }) => {
    let symbols
    if (rating <= 1) {
        symbols = "☆☆☆☆☆"
    } else if (rating >= 1 && rating < 1.5) {
        symbols = "★☆☆☆☆"
    }
    else if (rating >= 1.5 && rating < 2.5) {
        symbols = "★★☆☆☆"
    }
    else if (rating >= 2.5 && rating <= 3.5) {
        symbols = "★★★☆☆"
    }
    else if (rating >= 3.5 && rating < 4.5) {
        symbols = "★★★★☆"
    }
    else if (rating >= 4.5) {
        symbols = "★★★★★"
    }
    return (
        <div className="driverCard">
            <div>
                <figure>
                    <img className="driverImg" src={img} alt="Imagen de DNI" />
                </figure>
            </div>
            <div><p className="nameDriver"><strong>{name}</strong></p>
                <p>{symbols}</p>
                <span>{car.model} {car.licensePlate}</span>
            </div>

        </div>)
}
export default DriverCar