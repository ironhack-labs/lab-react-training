import './DriverCard.css'
import Rating from '../Rating/Rating'


const DriverCard = (driverCard) => {

    const { name, rating, img, car } = driverCard
    const { model, licenseplate } = car
    return (
        <>
            <img src={img} alt="idpicture" className='Pic' />
            <p>{name}</p>

            <Rating>

                {rating}

            </Rating>


            <p>{model}{licenseplate}</p>
        </>
    )
}

export default DriverCard
