import React from 'react'

function Rating (props){
  let rating=''
  for (let i=0; i<Math.round(props.children); i++){
    rating+= String.fromCharCode(9733)
  }
  for (let i=0; i<5-Math.round(props.children); i++){
    rating+= String.fromCharCode(9734)
  }

  return <div>{rating}</div>

}

export default Rating