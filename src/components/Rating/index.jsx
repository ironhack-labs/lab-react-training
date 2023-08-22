import React from 'react'

const Rating = ({children}) => {
   const countingStars = Math.round(children)
   const stars = []

   for(let i = 1; i<=5; i++){
    if(i <= countingStars){
        stars.push('★')
    }else {
        stars.push('☆')
    }
   }
  return (
    <div>{stars}</div>
  )
}

export default Rating