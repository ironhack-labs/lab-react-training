import React from 'react'

function Rating(props) {
    const {children} = props
    function getStars(star){
        if(star < 1){
            return "☆☆☆☆☆"
        }else if(star >= 1 && star <= 1.49){
            return "★☆☆☆☆"
        }else if(star >= 1.5 && star < 2.49){
            return "★★☆☆☆"
        }else if(star >= 2.5 && star < 3.49){
            return "★★★☆☆"
        }else if(star >= 3.5 && star < 4.49){
            return "★★★★☆"
        }else if(star >= 4.5){
            return "★★★★★"
        }
    }
  return (
    <div>
    {getStars(children)}
    </div>
  )
}

export default Rating