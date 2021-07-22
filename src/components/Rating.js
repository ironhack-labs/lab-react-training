import React from 'react';

const Rating = ({children:number}) =>{
        const roundedScore = Math.round(number);
        
        const star = "★";
        const emptyStar = "☆";

        return (
    <div>
      {star.repeat(roundedScore).padEnd(5, emptyStar) }
    </div>
    )
}

export default Rating;