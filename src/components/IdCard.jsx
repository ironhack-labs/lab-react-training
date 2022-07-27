import React from 'react'
import './IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
   const birthToString = birth.toString().slice(0,15);
  return (  
    <div className='id-card'>
        <img src={picture} alt=""/>
        <div className="data">
            <span><b>First Name: </b>{firstName}</span>
            <span><b>Last Name: </b>{lastName}</span>
            <span><b>Gender: </b>{gender}</span>
            <span><b>Height: </b>{height}</span>
            <span><b>Birth: </b>{birthToString}</span>
        </div>

    </div>
  )
}

export default IdCard