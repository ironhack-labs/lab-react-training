import Rating from './../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    return (
        <>
            <div className="containerCard">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <Rating>{rating}</Rating>
                    <p>{model} {licensePlate}</p>
                </div>
            </div>
        </>
    )
}

export default DriverCard