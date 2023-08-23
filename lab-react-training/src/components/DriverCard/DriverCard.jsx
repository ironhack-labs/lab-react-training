import Rating from "../Rating/Rating"
import './DriverCard.css'


const DriverCard = (driverCard) => {

    const { name, rating, img, car } = driverCard
    const { model, licensePlate } = car

    return (
        <article className="DriverCard">


            <img className="pepe" src={img} alt={name} />
            <p>{name}</p>

            <Rating>
                {rating}
            </Rating>

            <p>{model}</p>
            <p>{licensePlate}</p>



        </article>
    )

}

export default DriverCard