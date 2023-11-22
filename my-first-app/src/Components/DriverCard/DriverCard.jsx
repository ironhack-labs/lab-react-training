import Rating from '../Rating/Rating'

function DriverCard({ name, rating, img, car }) {

    const { model, licensePlate } = car
    return (
        <>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <img style={{ width: '20%' }} src={img} alt="foto" />
            <p>{model}</p>
            <p>{licensePlate}</p>

        </>
    )
}

export default DriverCard