import React from 'react'

export default function DriverCard({name, rating, img, car:{ model, licensePlate }}){
    console.log(img, model , licensePlate)

    let roundedChildren = Math.round(rating)
    let stars
    switch (roundedChildren){
        case 0:
             stars = '☆☆☆☆☆'
             break;
        case 1:
             stars = '★☆☆☆☆'
             break;
        case 2:
             stars = '★★☆☆☆'
             break;
        case 3:
             stars = '★★★☆☆'
             break;
        case 4:
             stars = '★★★★☆'
             break;
        case 5:
             stars = '★★★★★'
             break;
        default:
            break;
    }

    return(
        <div className="DriverCard">
          <div>
               <img src={img} alt=""></img>
          </div>
          <div>
            <h4>{name}</h4>
            <p>{stars}</p>
            <p>{model} - {licensePlate}</p>
          </div>
        </div>
    )
}