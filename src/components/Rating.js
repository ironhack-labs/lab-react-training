import React from 'react'

export default function Rating(props) {
    let star;
    if (props.Rating < 0.5) {
        star = '☆☆☆☆☆'
    }
    else if (props.Rating >= 0.5 && props.Rating < 1.5 ) {
        star = '★☆☆☆☆'
    }
    else if (props.Rating >= 1.5 && props.Rating < 2.5) {
        star = '★★☆☆☆'
    }
    else if (props.Rating >= 2.5 && props.Rating < 3.5) {
        star = '★★★☆☆'
    }
    else if (props.Rating >= 3.5 && props.Rating < 4.5) {
        star = '★★★★☆'
    }
    else {
        star = '★★★★★'
    }
    
    return (
        <div>
            <p>{star}</p>
        </div>
    )
}
