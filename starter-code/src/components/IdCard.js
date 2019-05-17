import React from 'react';

import './IdCard.css'

const IdCard = (props) => {
  return (
    <div className="idCardRecord">
      <img src={props.picture} alt="person face" />
      <div> 
        <p><span className="idCardDescription">First name: </span>{props.firstName}</p>
        <p><span className="idCardDescription">Last name: </span>{props.lastName}</p>
        <p><span className="idCardDescription">Gender: </span>{props.lastName}</p>
        <p><span className="idCardDescription">Height: </span>{props.height}</p>
        {/* <p><span className="idCardDescription">Birth: </span>{props.birth}</p> */}
        <p><span className="idCardDescription">Country: </span>{props.country}</p>
      </div>
    </div>
  )
}

export default IdCard;