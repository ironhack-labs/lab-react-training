import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    return (
        <>
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <img src={img} alt="" />
            <p>{model}</p>
            <p>{licensePlate}</p>
        </>

    )
}

export default DriverCard

