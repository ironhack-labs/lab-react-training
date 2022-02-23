// ./components/idCard.js

import React from 'react'

export default function IdCard(props) {
    console.log("props:",props)
  return (
    <div className="IdCard">
        <img
        src={props.idInfo.picture}
        alt="idInfophoto"
        className='profileImg' />
        <div className='box'>
            <p><b>First Name: </b>{props.idInfo.firstName}</p>
            <p><b>Last Name: </b>{props.idInfo.lastName}</p>
            <p><b>Gender: </b>{props.idInfo.gender}</p>
            <p><b>Height: </b>{props.idInfo.height} cm</p>
            <p><b>Birth: </b>{props.idInfo.birth.toString()}</p>
        </div>
    </div>
  )
}

