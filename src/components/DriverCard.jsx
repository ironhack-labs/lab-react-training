import React from 'react'

function DriverCard(props) {
    
    const {name, rating, img, car} = props

    function stars(rating){
        
        if (rating < 0.5) return "☆☆☆☆☆"
        else if (rating < 1.5) return "★☆☆☆☆"
        else if (rating < 2.5) return "★★☆☆☆"
        else if (rating < 3.5) return "★★★☆☆"
        else if (rating < 4.5) return "★★★★☆"
        else return "★★★★★"
    }

    
    
  return (
    <div class="carta">
    <img src={img} alt="" class="img-carta"/>
    <div>{name}</div>
    <div>{stars(rating)}</div>
    <div>{car.model}</div>
    <div>{car.licensePlate}</div>

    </div>
  )
}

export default DriverCard