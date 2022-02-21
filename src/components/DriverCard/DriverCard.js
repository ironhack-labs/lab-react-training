import '../Rating/Rating'
import './drivercard.css'
import Rating from '../Rating/Rating'


const DriverCard = (props) =>{

    const {name, rating, img, car } = props

    const {model, licensePlate} = car

    return(

        <article>
            <div className="driver">
                <p><img src={img}></img></p>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                
                <p>{model} {licensePlate}</p>
            </div>
        </article>


    )
}

export default DriverCard