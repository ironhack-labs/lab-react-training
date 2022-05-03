import star from '../assets/images/star.png'
import emptystar from '../assets/images/emptystar.png'

import './DriverCard.css'


const DriverCard = ({name, rating, img, car}) => {
    const {model, licensePlate} = car
    const rounded = Math.round(rating)

    if (rounded===0){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    } else if (rounded===1){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    } else if (rounded===2){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    } else if (rounded===3){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    } else if (rounded===4){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    } else if (rounded===5){
        return(
            <div className="rating">
            <div className='driverimg'>
                <img src={img} alt=""/>
            </div>
            <div>
            <p>{name}</p>
            <div className='stars'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            </div>
            <p>{model} - {licensePlate}</p>
            </div>
            </div>
        )
    }
}

export default DriverCard