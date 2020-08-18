import React from 'react'
import Rating from './Rating'

function DriverCard(props){
    let containerStyles = {
      backgroundColor: '#455eb5',
      borderRadius: '25px',
      color: `white`
      }
    let imageStyles={
      width: '150px',
      heigth: '150px',
      borderRadius: '75px'

    }
    return(
      <article style={containerStyles}>
        <img src={props.img} alt='' style={imageStyles}/>
        <div>
          <p>{props.name}</p>
          <p><Rating>{props.rating}</Rating></p>
          <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
      </article>
    )
}


export default DriverCard