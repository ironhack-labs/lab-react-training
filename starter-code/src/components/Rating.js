import React from 'react'

function Rating(props) {
    return (
        <div>
            {

            Math.round(props.children) < 1 
            ? "☆☆☆☆☆"
            : Math.round(props.children) < 2
            ? "★☆☆☆☆"
            : Math.round(props.children) < 3
            ? "★★☆☆☆"
            : Math.round(props.children) < 4
            ? "★★★☆☆"
            : Math.round(props.children) < 5
            ? "★★★★☆"
            : "★★★★★"

            }
            
        </div>
    )
}

export default Rating
