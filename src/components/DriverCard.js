import React from 'react'
import '../assets/css/DriverCard.css'
import Rating from './Rating'


const DriverCard = ({name,rating,img,car})=> {
    return(
    <div className='DriverCard__box'>
         <img src={img} alt={name}/>
            <div>
                <h2 className='name'>{name}</h2>
            
               <p className='DriverCard__rating'>
                <Rating>{rating}</Rating>
                </p>
            
                <p className='DriverCard__car-info'>{car.model} {car.licensePlate}</p>
            </div>

        

    </div>
    )

}



export default DriverCard
