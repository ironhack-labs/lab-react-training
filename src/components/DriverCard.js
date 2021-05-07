import React from 'react';

const DriverCard = (props) =>{

    const stars = (rating) => {
        let result = '';
        for (let i = 1; i <= 5; i++) {
            if (i >= 1 && i <= Math.round(rating)) {
                result += '★'
            } else {
                result += '☆'
            }
        }
        return result;
    }
    return(
        <div className='driver-card'>
        <img src={props.img}/>
        <article className='driver-details'>
        <p>{props.name}</p>
         <p>{stars(props.rating)}</p>
         <p>{props.car.model} - {props.car.licensePlate}</p>
         </article>
        </div>
    )
}

export default DriverCard;