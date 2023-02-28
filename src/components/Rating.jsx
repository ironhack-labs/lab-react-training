import React from 'react'

function Rating(props) { 
const { children } = props

const checkRating = (rating => {
    if (rating < 0.5) {
        return "☆☆☆☆☆"
    } else if (rating < 1.5 ) {
        return "★☆☆☆☆"
    } else if (rating < 2.5) {
        return "★★☆☆☆"
    } else if (rating < 3.5) {
        return "★★★☆☆" 
    } else if (rating < 4.5) {
        return "★★★★☆"
    } else {
        return "★★★★★"
    }
})

  return (
    <div>
        <p>
            {/* {checkRating(JSON.stringify(rating))} */}

            {checkRating(children)}
        </p>
    </div>
  )
}

export default Rating