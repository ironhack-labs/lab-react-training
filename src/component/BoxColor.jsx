import React from "react"

function BoxColor (props) {

  let colors = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, 
  }
  const hexa = '#'+('0'+props.r.toString(16)).slice(-2)+('0'+props.g.toString(16)).slice(-2)+('0'+props.b.toString(16)).slice(-2);  
 
  return (
   <div className ="box boxcolor" style={colors}>
    rgb({props.r}, {props.g}, {props.b})
    <br></br>
    {hexa}

   </div>
 ) 
}



export default BoxColor;