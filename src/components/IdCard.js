import React from 'react'

export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="m-3 border border-dark d-flex flex-row mb-3 align-items-center">
      <div className="p-2"><img src={picture} alt="profile pic" /></div>
      <div className="p-2">
      <p className='text-[40px] '><b>First Name: </b>{firstName}</p>
      <p className='text-xs'><b>Last Name: </b>{lastName}</p>
      <p><b>Gender: </b>{gender}</p>
      <p><b>Height: </b>{height/100}m</p>
      <p className='bg-gradient-to-br from-red-600 to-amber-300 '><b>birth: </b>{birth.toDateString()}</p>
      </div>
    </div>
  )
}
