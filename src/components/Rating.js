import React from 'react'
import '../assets/css/Rating.css'


const Rating = ({children}) => {
    
    const checkRating=(num)=> {
      let rating = "";
      let i;
      if (num === 0) rating = "☆☆☆☆☆";
      if (num === 5) rating = "★★★★★";
      if (num !== 0 && num !== 5) {
          for (i = 0; i < num; i++) {
            rating += "★";
          }
          if(num>5){
              rating="★★★★★"
          }
          if (num < 5) {
            for (let j = i+1; j <= 5; j++) {
              rating += "☆";
            }
          }
      }
      return rating;
    }
  
    return (
      <div className = 'rating'>
        {checkRating(Math.round(children))}
      </div>
    )
  }



export default Rating
