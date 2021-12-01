import React from 'react';

const Rating =(props)=>{
    const {children} = props
    const RatingStars =(rating)=>'★'.repeat(Math.round(rating))+'☆'.repeat(5-Math.round(rating))
    return (
        <p>{RatingStars(children)}</p>
    )
    }
    
    export default Rating;