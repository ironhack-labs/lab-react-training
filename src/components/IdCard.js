import React from 'react'

export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="m-3 border border-dark d-flex flex-row mb-3 align-items-center">
      <div className="p-2"><img src={picture} alt="profile pic" /></div>
      <div className="p-2">
      <p><b>First Name: </b>{firstName}</p>
      <p><b>Last Name: </b>{lastName}</p>
      <p><b>Gender: </b>{gender}</p>
      <p><b>Height: </b>{height/100}m</p>
      <p><b>birth: </b>{birth.toLocaleString()}</p>
      </div>
    </div>
  )
}
