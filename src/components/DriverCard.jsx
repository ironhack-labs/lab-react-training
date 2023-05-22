import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className="driverCard">
            <div>
                <p> <img src={img} alt="picture" /></p>
            </div>

            <div>
                <p> <strong>{name}</strong></p>
                <Rating>{rating}</Rating>

                <p><strong>{model}-{licensePlate}</strong> </p>
            </div>
        </div>)

}

export default DriverCard
