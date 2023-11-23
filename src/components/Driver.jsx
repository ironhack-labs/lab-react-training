import Rating from "./Rating"
const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car


    return (
        <div>
            <img src={img} style={{ width: '200px' }} alt="" />
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <h3>{model}-{licensePlate}</h3>

        </div>
    )
}



export default DriverCard