import { findByLabelText } from '@testing-library/react';
import React from 'react';

const ratingStyle = {
    display: 'flex',
    flexDirection: "row",
    padding: 20
}

const starStyle = {
    width: 50,
    height: 50
}

const Rating = props => {
    const fullStars = Math.round(props.children);

    return (
        <div style={ratingStyle}>
           {
               [0, 1, 2, 3, 4].map(element => {
                   if( element < fullStars) {
                       return <img style={starStyle} key={`star-${element}`} src="./img/fullStar.png" alt='star'/>
                   } else {
                    return <img style={starStyle} key={`star-${element}`} src="./img/emptyStar.png" alt='star'/>
                   }
               })
           }
        </div>
    ) 
}

export default Rating;