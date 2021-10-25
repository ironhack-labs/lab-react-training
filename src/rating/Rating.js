import React from 'react';

function Rating(props) {
    
let fullStart='★'
let emptyStart="☆"

let ratingStarts = "☆☆☆☆☆"
if(props.children<=1){
return ratingStarts ="★☆☆☆☆"
}
if(props.children<=2){
return ratingStarts ="★★☆☆☆"
}
if(props.children<=3){
return ratingStarts ="★★★☆☆"
}
if(props.children<=4){
return ratingStarts ="★★★★☆"
}
if(props.children<=5){
return ratingStarts ="★★★★★"
}
    return (
        <div>
           {ratingStarts}
        </div>
    )
}

export default Rating;
