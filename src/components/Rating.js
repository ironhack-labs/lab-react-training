//////Iteration6//////

import React from 'react'

export default function Rating(props) {

    let x = props.ratingNr
    
    switch (true){
        case (x < 1):
            return (<h1>★☆☆☆☆</h1>)
        case (x > 1 && x <= 2):
            return (<h1>★★☆☆☆</h1>)
        case (x > 2 && x <= 3):
            return (<h1>★★★☆☆</h1>) 
          case (x > 3 && x <= 4):
            return (<h1>★★★★☆</h1>)
          case (x > 4 && x <= 5):
            return (<h1>★★★★★</h1>) 
        default:
            return (<h1>☆☆☆☆☆</h1>)
}}
