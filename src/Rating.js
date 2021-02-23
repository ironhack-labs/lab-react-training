import React from 'react'

export default function Rating(props) {
    const starRating = Math.round(props.children)
    let stars = '';
    for(let i=0; i < starRating; i++){
        stars += "★"
    }
    for (let i = 0; i < 5 - starRating; i++)
        stars += "☆"

    return (
        <div>
            <p style={{fontSize: "20px", textAlign:"center", paddingLeft: "20px", margin: "0"}}>{stars}</p>
        </div>
    )
}
