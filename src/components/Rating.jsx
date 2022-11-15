import React from 'react'

function Rating(props) {
    function getRating(num){
        switch(Math.round(num)){
            case 0:
                return "☆☆☆☆☆";
            case 1:
                return "★☆☆☆☆";
            case 2:
                return "★★☆☆☆";
            case 3:
                return "★★★☆☆";
            case 4:
                return "★★★★☆";
            case 5:
                return "★★★★★";
            default:
        }
    }
  return (
    <div>
    <h1>{getRating(props.children)}</h1>
    </div>
  )
}

export default Rating

