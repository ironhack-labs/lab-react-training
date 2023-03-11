import React from 'react'
import BlackBox from './BlackBox'

export default function Random({ min, max }) {
  function randomNum(min, max) {
    return min + Math.floor(Math.random() * max)
  }

  return (
    <BlackBox>
      <p>Random value between {min} and {max} {'=>'} {randomNum(min, max)} </p>
    </BlackBox>
  )
}
