import React from 'react'

const Rating = ({ rate }) => {
  switch (Math.round(rate)) {
    case 0:
      rate = '☆☆☆☆☆'
      break
    case 1:
      rate = '★☆☆☆☆'
      break
    case 2:
      rate = '★★☆☆☆'
      break
    case 3:
      rate = '★★★☆☆'
      break
    case 4:
      rate = '★★★★☆'
      break
    case 5:
      rate = '★★★★★'
      break
    default:
      rate = '☆☆☆☆☆'
  }

  return <div>{rate}</div>
}

export default Rating
