import './DriverCard.css'
import Rating from './Rating'

const DriverCard = ({ name, rating, img, car:{ model, licensePlate} }) => {  

    return(
        <article className='bgBlue'>
            <img src={img}/>
            <div className='cardData'>
                <p>{name}</p>
            <p><Rating children={rating}/></p>
            <p>{model} - {licensePlate}</p>
            </div>
        </article>

    )
    
}

export default DriverCard
