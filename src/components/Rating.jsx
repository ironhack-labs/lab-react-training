import React from 'react';

const Rating = ({children}) => (
    <article>
        <p>{`${addRate(children)}`}</p>
    </article>
)

let addRate = (rating) => {
    switch(Math.round(parseFloat(rating))){
        case 5:
            return "★ ★ ★ ★ ★"
        case 4:
            return "★ ★ ★ ★ ☆"
        case 3:
            return "★ ★ ★ ☆ ☆"
        case 2:
            return "★ ★ ☆ ☆ ☆"
        case 1:
            return "★ ☆ ☆ ☆ ☆"
        case 0:
            return "☆ ☆ ☆ ☆ ☆"
            default:
                return "Valoración Invalida"
    }
}

export default Rating