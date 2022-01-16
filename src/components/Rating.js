import React from 'react';
import '../styles/Rating.css'

const Rating = ({children}) => {

    let rating;

    if (children === 0 && children <= 0.5){
        rating = "☆☆☆☆☆"
    } else if  (children >= 0.6 && children <=  1.49) {
        rating ="★☆☆☆☆"
    } else if  (children >= 1.5 && children <=  2.49) {
        rating ="★★☆☆☆"
    } else if  (children >= 2.5 && children <=  3.49) {
        rating ="★★★☆☆"
    } else if  (children >= 3.5 && children <= 4.49 ) {
        rating ="★★★★☆"
    } else if  (children >= 4.5 && children <= 5.0 ) {
        rating ="★★★★★"
    }
    

    return (
        <div className='rating'>
            <p className='rating-stars'>{rating}</p>
        </div>
        
    )
}

export default Rating;