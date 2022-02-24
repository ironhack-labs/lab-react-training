import React from 'react'

export default function DriverCard(props) {

  const roundRating = Math.round(props.driverCardInfo.rating)
  console.log(props.driverCardInfo.rating)
  
  const stars = []
  for (let i=0; i<5;i++) {
      if(i < roundRating){
          stars[i] = <>&#9733;</>
      } else {
          stars[i] = <>&#9734;</>
      }
  }

  return (
    <div>
        <img src={props.driverCardInfo.img} alt="profileImage" className="driverPicture"/>
        <p>{props.driverCardInfo.name}</p>
        <span>{stars[0]}</span>
        <span>{stars[1]}</span>
        <span>{stars[2]}</span>
        <span>{stars[3]}</span>
        <span>{stars[4]}</span>
        
    </div>
  )
}

