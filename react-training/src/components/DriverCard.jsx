import Rating from './Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    return (
        <>
            <div class="containerCard">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p><Rating>{rating}</Rating></p>
                    <p>{model} {licensePlate}</p>
                </div>
            </div>


        </>
    )
}

export default DriverCard