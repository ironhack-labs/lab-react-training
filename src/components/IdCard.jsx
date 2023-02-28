import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div className = "id-card">
        <img className="id-image" src={picture} alt="" />
        <div className="id-info">
        <h3>First name:<span>{firstName}</span></h3>
        <h3>Last name:<span>{lastName}</span></h3>
        <h3>Gender:<span>{gender}</span></h3>
        <h3>Height:<span>{height}</span></h3>
        <h3>Birth:<span>{birth.toLocaleString()}</span></h3>
        </div>
        

    </div>
  )
}

export default IdCard