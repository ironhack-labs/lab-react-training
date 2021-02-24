import React from 'react'

export default function Rating(props) {

    const printStars = (numberStar) => {
        const number = Math.round(numberStar)
        switch(number) {
            case 5:
                return '★★★★★'
            case 4:
                return '★★★★☆'
            case 3:
                return '★★★☆☆'
            case 2:
                return '★★☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 0:
                return '☆☆☆☆☆'
        } 
    }

    return (
        <div>
            <p>{printStars(props.children)}</p>
        </div>
    )
}
