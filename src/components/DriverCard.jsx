import React from 'react'

function DriverCard(props) {

    let {name, rating, img, car} = props

    let divStyle = {
        height: 100,
        width: 100
    };

  return (
    <div>
        
        <img src={img} alt=""  style={divStyle}/>

        <p>{name}</p>
        <p>{rating}</p>
        <p>{car.model} - {car.licensePlate}</p>


    </div>
  )
}

export default DriverCard