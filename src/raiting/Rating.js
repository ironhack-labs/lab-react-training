import React from 'react';
import './Rating.css'

function Rating (props){
let rating = ""
 if(Math.round(props.children) === 0) {
    rating = "☆☆☆☆☆"
 }
  else if (Math.round(props.children) === 1) {
    rating = "★☆☆☆☆"
 } else if(Math.round(props.children) === 2){
    rating = "★★☆☆☆"
} 
else if(Math.round(props.children) === 3){
    rating = "★★★☆☆"
}
else if(Math.round(props.children) === 4) {
    rating =  "★★★★☆"
}  
else if(Math.round(props.children) === 5){
    rating = "★★★★★"
 }   
 return (
      <div className="Rating">
 <p>{rating}</p>
      </div>
 );
}

export default Rating;