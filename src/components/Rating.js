import React from 'react'

function Rating(props) {
    let stars = ''
    for (let i=0; i < 5; i++) {
        if (Math.round(props.children) > i) {
            stars += '★'
        }
        else {
            stars += '☆'
        }
    }
    return (
        <p>{stars}</p>
    )
}

export default Rating