import React from 'react'

export default function Rating({children}) {
    let stars = ["☆☆☆☆☆","★☆☆☆☆","★★☆☆☆","★★★☆☆","★★★★☆","★★★★★"];
    let star = Math.round(children);
    let rating = stars[star];
    return (
        <div>
            {rating}
        </div>
    )
}
