import Rating from "../iteration6/Rating"

const DriverCard = (name, rating, img) => {

    return (
        <div>
            <div >
                <img src={img} alt={name} />
            </div>
            <div >
                <h5>{name}</h5>
                <Rating>{rating}</Rating>
                {/* <p>{car.model} - {car.licensePlate} </p> */}
            </div>
        </div>
    )
}

export default DriverCard