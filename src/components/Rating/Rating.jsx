import React from 'react'

function Rating(props) {
  const {children} = props

  const checkRating = (children) => {

    let rating = Math.round(children)

    if (rating === 0) {
        return <div>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            </div>
    }

    else if (rating === 1) {
        return <div>
            <span >&#9733;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            </div>
    }

    else if (rating === 2) {
        return <div>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            </div>
    }

    else if (rating === 3) {
        return <div>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9734;</span>
            <span >&#9734;</span>
            </div>
    }

    else if (rating === 4) {
        return <div>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9734;</span>
            </div>
    }

    else  {
        return <div>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            <span >&#9733;</span>
            </div>
    }



  }
  return (
    <div>
        
        
        {checkRating(children)}
        
       
    </div>
  )
}

export default Rating