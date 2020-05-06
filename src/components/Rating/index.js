import React from 'react'

const Rating = ({ rate }) => {
  switch (Math.round(rate)) {
    case 0:
      return <div>☆☆☆☆☆</div>
    case 1:
      return <div>★☆☆☆☆</div>
    case 2:
      return <div>★★☆☆☆</div>
    case 3:
      return <div>★★★☆☆</div>
    case 4:
      return <div>★★★★☆</div>
    case 5:
      return <div>★★★★★</div>
    default:
      return
  }
}

export default Rating
