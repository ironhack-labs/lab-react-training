import React from 'react'

export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className='border border-black flex p-2 mb-2' >
      <img src={picture} alt="Id" />
      <div className='flex flex-col items-start ml-2'>
        <p><span className='font-bold'>First name:</span> {firstName}</p>
        <p><span className='font-bold'>Last name:</span> {lastName}</p>
        <p><span className='font-bold'>Gender:</span> {gender}</p>
        <p><span className='font-bold'>Height:</span> {height}</p>
        <p><span className='font-bold'>Birth:</span> {birth.toDateString()}</p>
      </div>
    </div>
  )
}
