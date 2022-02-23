// ./components/main/Rating.js

import React from 'react'

export default function Rating(props) {

    const roundRating = Math.round(props.children)
    console.log(roundRating)
    
    const stars = []
    for (let i=0; i<5;i++) {
        if(i < roundRating){
            stars[i] = <>&#9733;</>
        } else {
            stars[i] = <>&#9734;</>
        }
    }

    console.log(stars)

  return (
    <div>
        <p>&#9733; &#9734;{props.children}</p>
        <span>{stars[0]}</span>
        <span>{stars[1]}</span>
        <span>{stars[2]}</span>
        <span>{stars[3]}</span>
        <span>{stars[4]}</span>
    </div>
  )
}