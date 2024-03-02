import React from 'react'
// {lastName, firstName, gender, height, birth, picture}
// eslint-disable-next-line react/prop-types
export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="idCard">
        <div className="idCard-img">
            <img src={picture} alt={firstName}/>
        </div>

        <div className="idCard-info">
            <span><b>First Name: </b>{firstName}</span>
            <span><b>Last Name: </b>{lastName}</span>
            <span><b>Gender: </b>{gender}</span>
            <span><b>Height: </b>{height}</span>
            <span><b>Birth: </b>{birth}</span>
        </div>
    </div>
  )
}
