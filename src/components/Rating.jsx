import React from 'react'


const Rating = (props) => {
  
  let rating = ""
  for (let i=0; i < 5; i++){
      if(Math.round(props.children)>i){
          rating += "★"
      }else{
          rating +="☆"
      }
  }
  return(
      <div className = "Rating">
          {rating}
      </div>
  )
}

export default Rating