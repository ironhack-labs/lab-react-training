import React from 'react'

const DriverCard = props => {
  let rating = Math.round(props.rating)
  let stars = []
  
  for (let i = 0; i <= rating - 1; i++) {
    stars.push('★')
  }
  
  for (let i = stars.length; i < 5; i++) {
    stars.push('☆')
  }

  return (
    <div className="driverCard">
        <img src={props.img} alt={props.name}/>
        <div>
            <h2>{props.name}</h2>
            <h2>{stars}</h2>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard
