import React from 'react'
import BlackBox from './BlackBox'

export default function FacebookItem({ lastName, firstName, country, type, picture }) {
  return (
    <BlackBox>
    <img src={picture} alt="Id" />
    <div className='flex flex-col items-start ml-2'>
      <p><span className='font-bold'>First name:</span> {firstName}</p>
      <p><span className='font-bold'>Last name:</span> {lastName}</p>
      <p><span className='font-bold'>Country:</span> {country}</p>
      <p><span className='font-bold'>Type:</span> {type}</p>
    </div>
  </BlackBox>
  )
}
