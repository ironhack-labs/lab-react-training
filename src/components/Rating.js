import React from 'react'

export default function Rating(props) {
    const numberOfStars = Math.round(props.children)
    let stars = '';
    for(let i=0; i < numberOfStars; i++){
        stars += "★"
    }
    for(let i=0; i < 5-numberOfStars; i++){
        stars += "☆"
    }
    
    return (
        <div>
            <p style={{fontSize: "30px", textAlign:"left", padding: "0", margin: "0"}}>{stars}</p>
        </div>
    )
}
