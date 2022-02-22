

import Rating from '../rating/Rating'
import './DriverCard.css'

const DriverCard = (props) => {

    const { name, rating, img } = props
    const { model, licensePlate } = props.car

    return (
        <article>
            <div>
                <p> <img src={img} style={{ width: 200 }} /></p>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{model}{licensePlate}</p>

            </div>

        </article>

    )
}

export default DriverCard