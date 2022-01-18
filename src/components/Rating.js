import React from "react";


const Rating = ( {children} ) => {
    let rating;
    if (children < 0.5) {
        rating = "☆☆☆☆☆";
    } else if (children >= 0.5 && children < 1.5) {
        rating = "★☆☆☆☆";
    } else if (children >= 1.5 && children < 2.5) {
        rating = "★★☆☆☆";
    } else if (children >= 2.5 && children < 3.5) {
        rating = "★★★☆☆";
    } else if (children >= 3.5 && children < 4.5) {
        rating = "★★★★☆";
    } else if (children >= 4.5) {
        rating = "★★★★★";
    };
    
    return <div className="rating">{rating}</div>;
};

export default Rating;

    
        
     
    
