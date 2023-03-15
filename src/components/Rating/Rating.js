import React from 'react'

function Rating({ children }) {

  const rating = Math.round(children)
  let stars
  if (rating === 0) {
    stars = '☆☆☆☆☆'
  } else if (rating === 1) {
    stars = '★☆☆☆☆'
  } else if (rating === 2) {
    stars = '★★☆☆☆'
  } else if (rating === 3) {
    stars = '★★★☆☆'
  } else if (rating === 4) {
    stars = '★★★★☆'
  } else if (rating === 5) {
    stars = '★★★★★'
  }

  const divStyle = { fontSize: 80}

  return (
    <div style={divStyle}>
      {stars}
    </div>
  )
}

export default Rating