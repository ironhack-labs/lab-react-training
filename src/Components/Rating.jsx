import React from 'react'

export default function Rating(props) {
    const number = props.children
    let starLine;
    switch (Math.round(number)) {
        case 0:
            starLine = '☆☆☆☆☆';
            break;
        case 1:
            starLine = '★☆☆☆☆'
            break;
        case 2:
            starLine = '★★☆☆☆'
            break;
        case 3:
            starLine = '★★★☆☆'
            break;
        case 4:
            starLine = '★★★★☆'
            break;
        case 5:
            starLine = '★★★★★'
            break;
        default:
            starLine = '☆☆☆☆☆';
    }
    return (
        <div>
            {starLine}
        </div>
    )
}
