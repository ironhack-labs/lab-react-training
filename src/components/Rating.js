import React from 'react'

function Rating(props){
 
    let nbrStars = Math.round(props.children)
    let starRating


    if (nbrStars === 0){
        starRating = "☆☆☆☆☆"
    } else if (nbrStars === 1){
        starRating = "★☆☆☆☆"
    } else if (nbrStars === 2){
        starRating = "★★☆☆☆"
    } else if (nbrStars === 3){
        starRating = "★★★☆☆"
    } else if (nbrStars === 4){
        starRating = "★★★★☆"
    } else if (nbrStars === 5){
        starRating = "★★★★★"
    } 

 
    return ( 
        <div>
            <p>{starRating}</p> 
        </div>       
        
    )
}

export default Rating;