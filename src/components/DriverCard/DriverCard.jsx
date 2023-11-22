import Rating from "../Rating/Rating"

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    return (
        <div>
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <img src={img} style={{ width: '200px', height: '200px' }} alt="" />
            <p>{model}-{licensePlate}</p>

        </div>
    )
}


export default DriverCard