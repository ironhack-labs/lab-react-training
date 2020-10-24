import React from 'react'

export default function Rating(props) {

    console.log(props)
    const stars = Math.round(props.children)
    const countStars = (stars) => {
        // if (stars === 0) {
        //     return '☆☆☆☆☆'
        // } else if(stars === 1) {
        //     return '★☆☆☆☆'
        // } else if(stars === 2) {
        //     return '★★☆☆☆'
        // } else if(stars === 3) {
        //     return '★★★☆☆'
        // } else if(stars === 4) {
        //     return '★★★★☆'
        // } else if(stars === 5) {
        //     return '★★★★★'
        // }
        switch(stars) {
            case 0:
                return '☆☆☆☆☆';
            case 1:
                return '★☆☆☆☆';
            case 2:
                return '★★☆☆☆';
            case 3:
                return '★★★☆☆';
            case 4:
                return '★★★★☆';
            case 5:
                return '★★★★★';
            default:
                console.log('no rating')
        }
    }

    return (
        <div>
            <p>{countStars(stars)}</p>
        </div>
    )
}
