import React from 'react';

function Rating({children}) {

    let num = Number(children)
    let numStars;

    if (num >= 5) {
        numStars = '★★★★★'
    } else if (num >= 4) {
        numStars = '★★★★☆'
    } else if (num >= 3) {
        numStars = '★★★☆☆'
    } else if (num >= 2) {
        numStars = '★★☆☆☆'
    } else if (num >= 1) {
        numStars = '★☆☆☆☆'
    } else {
        numStars = '☆☆☆☆☆'
    } 

    return (
        <div>
            {numStars}
        </div>
    )
}

export default Rating;