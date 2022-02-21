import Rating from './Rating'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <article className="DriverCard">
            <img src={img} alt={name} />
            <p>{name}</p>
            <p><Rating children={rating} /></p>
            <p>{car.model} - {car.licensePlate}</p>
        </article>
    )
}


export default DriverCard