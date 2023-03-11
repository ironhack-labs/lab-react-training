import React from 'react'
import BlackBox from './BlackBox'

export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <BlackBox>
      <img src={picture} alt="Id" />
      <div className='flex flex-col items-start ml-2'>
        <p><span className='font-bold'>First name:</span> {firstName}</p>
        <p><span className='font-bold'>Last name:</span> {lastName}</p>
        <p><span className='font-bold'>Gender:</span> {gender}</p>
        <p><span className='font-bold'>Height:</span> {height}</p>
        <p><span className='font-bold'>Birth:</span> {birth.toDateString()}</p>
      </div>
    </BlackBox>
  )
}
