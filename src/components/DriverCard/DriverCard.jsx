import Rating from '../Rating/Rating'
import './DriverCard.css'


const DriverCard = ({ driver }) => {
    const { name, rating, img } = driver
    const { model, licensePlate } = driver.car


    return (
        <div className='driver'>

            <img className='driver-img' src={img} alt="" />


            <div className='text'>
                <p>{name}</p>
                <Rating children={rating}></Rating>
                <p>{model} - {licensePlate}</p>
            </div>

        </div>
    )

}
export default DriverCard