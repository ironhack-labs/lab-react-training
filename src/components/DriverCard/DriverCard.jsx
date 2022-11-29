import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = props => {

    const { name, rating, img, car } = props

    const {model, licensePlate} = car
  
    return (
        
        <div className='driverCard'>

            <img src={img} alt="img" />
            <div className='driverData'>
                <h2>{name}</h2>
                <Rating>{ rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard