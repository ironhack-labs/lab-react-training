import React from 'react'
import BlackBox from './BlackBox'

export default function BoxColor({ r, g, b }) {

  function textColor() {
    if (r + g + b >= 300) {
      return 'text-black'
    } else {
      return 'text-white'
    }
  }

  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')
  

  return (
    <BlackBox className={`${textColor()} h-24 justify-center items-center flex-col`} color={`rgb(${r},${g},${b})`}>
      <p>rgb({r}, {g}, {b}) <br /></p>
      <p>{rgbToHex(r, g, b)}</p>
    </BlackBox>
  )
}