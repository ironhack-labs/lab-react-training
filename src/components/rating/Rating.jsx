import React from 'react';
import P from 'prop-types';
import emptyStar from '../../img/star.png'
import fullStar from '../../img/fullStar.png'

const Rating = ({children}) =>{
  let fullStars = Math.round(children);
  let emptyStars = 5-fullStars;
  let starsList = [];
  for (let i = 0; i < fullStars; i++){
    starsList.push(true)
  }
  for (let i = 0; i < emptyStars; i++){
    starsList.push(false)
  }
  
  return(
    <div style={{display: 'flex'}}>
      {starsList.map(star=>{
        if (star) return <img src={fullStar} alt="fullStar" style={{width:'30px'}}/>
        else return <img src={emptyStar} alt='star' style={{width:'30px'}}/>
      })}
    </div>
  )
}

export default Rating;