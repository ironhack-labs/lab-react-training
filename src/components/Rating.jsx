import React from 'react'

function Rating(props) {

    const {children} = props

    if (children >= 4.5){ // 5 Stars
        return <p>★★★★★</p>
    } else if (children >= 3.5) { // 4 Stars
        return <p>★★★★☆</p>
    } else if (children >= 2.5) { // 3 Stars
        return <p>★★★☆☆</p>
    } else if (children >= 1.5) { // 2 Stars
        return <p>★★☆☆☆</p>
    } else if (children >= 0.5) { // 1 Star
        return <p>★☆☆☆☆</p>
    } else { // 0 Star
        return <p>☆☆☆☆☆</p>
    }
}

export default Rating