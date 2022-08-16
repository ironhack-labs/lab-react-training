import React from 'react'

function DriverCard(props) {

    let {name, rating, img, car} = props;

    let roundedRating = Math.round(rating);

    switch(roundedRating){
        case 0:
            rating = '☆☆☆☆☆';
            break;
        case 1:
            rating = '★☆☆☆☆'
            break;
        case 2:
            rating = '★★☆☆☆'
            break;
        case 3:
            rating = '★★★☆☆';
            break;
        case 4:
            rating = '★★★★☆'
            break;
        case 5:
            rating = '★★★★★'
            break;

    }

  return (
    <div> {name} {rating} 
    <img style={{width: 100}}src={img} alt="" />
    {car.model} {car.licensePlate}</div>
  )
}

export default DriverCard