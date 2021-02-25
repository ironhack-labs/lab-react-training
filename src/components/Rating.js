import React from 'react'

export default function Rating(props) {
    
    const printStars = (starNumber) => {
        const number = Math.round(starNumber)

        switch(number) {
            case 5:
                return "★★★★★"
            case 4:
                return "★★★★☆"
            case 3:
                return "★★★☆☆"
            case 2:
                return "★★☆☆☆"
            case 1:
                return "★☆☆☆☆"
            case 0:
                return "☆☆☆☆☆"
            default:
                return "☆☆☆☆☆"
        }
    }
    
    return (
        <div>
            <p>{printStars(props.children)}</p>
        </div>
    )
}
