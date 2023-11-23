import "./DriverCard.css"

import Rating from "../Rating/Rating"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car
    return (

        <div className="DriverCard">
            <figure className="left-column"><img src={img} alt={name} /></figure>
            <section className="rigth-column">
                <p>{name}</p>
                <p><Rating>{rating}</Rating></p>
                <p>{model} - {licensePlate} </p>
            </section>
        </div>
    )
}

export default DriverCard