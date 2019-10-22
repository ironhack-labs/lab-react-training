import React from 'react';
import Moment from 'react-moment';


const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props

  return (
    <div className="IdCard">
      <img src={picture} alt="idPicture" />
      <div className="id-content">
        <p><span className="strong">First name: </span>{firstName}</p>
        <p><span className="strong">Last name: </span>{lastName} </p>
        <p><span className="strong">Gender: </span>{gender} </p>
        <p><span className="strong">Height: </span>{JSON.stringify(height) + "cm"}</p>
        <p><span className="strong">Birth: </span> <span><Moment format="ddd MMM Do YYYY ">{birth}</Moment></span></p>
      </div>
    </div>
  )
}

export default IdCard;