import React from 'react'


export default function Rating({ children }) {
    const totalStars = 5; // without this the empty stars will not show!!
    let roundedRating = Math.round(children); // This rounds the rating
    let starRatingResults = "";

    for (let i = 0; i < totalStars; i++) {
        if(i < roundedRating){
            starRatingResults += "★"; 
        } else {
            starRatingResults += "☆"; 
        }
    }

    return (
        <div className="rating">
     
            {starRatingResults}
           
        </div>
    )
}