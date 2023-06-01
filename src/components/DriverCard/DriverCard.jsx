import React from 'react';
import './DriverCard.css'
import Rating from '../Rating/Rating' // he intentado reutilizarlo pero no ha funcionado...


function DriverCard(props) {
  const { name, rating, img, car, } = props
  const{model,licensePlate}= car
  const point = Math.random(rating)

  let stars;

    switch (point) {
        case 1:
            stars = '★☆☆☆☆'
            break
        case 2:
            stars = '★★☆☆☆'
            break
        case 3:
            stars = '★★★☆☆'
            break
        case 4:
            stars = '★★★★☆'
            break
        case 5:
            stars = '★★★★★'
            break
        default:
            stars = '☆☆☆☆☆'
            break
    }
  
  return (
    
    <div className='DriverCard' >
      <img src={img} alt={img}></img>
      <div >
        {name}
        {stars}    

        <p>{model}-{licensePlate}</p>
      </div>
    </div>
  )
}


export default DriverCard;
