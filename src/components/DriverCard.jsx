import React from 'react'

function DriverCard(props) {
    const{name, rating, img, car} = props;

    const ratingFunction = (rating) => {
        return Math.round(rating);
        
    }
  return (
    <div>
        <img className="driver-image" src={img} alt="" />
        <h3>{name}</h3>
        {ratingFunction(rating) === 5 && <p>★★★★★</p>} 
        {ratingFunction(rating) === 4 && <p>★★★★☆</p>} 
        {ratingFunction(rating) === 3 && <p>★★★☆☆</p>} 
        {ratingFunction(rating) === 2 && <p>★★☆☆☆</p>} 
        {ratingFunction(rating) === 1 && <p>★☆☆☆☆</p>} 
        {ratingFunction(rating) === 0 && <p>☆☆☆☆☆</p>}
        <p>{car.model} {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard