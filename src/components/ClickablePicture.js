import React, { Component } from "react";

let maxence1 = require ("../img/persons/maxence.png")
let glasses = require("../img/persons/maxence-glasses.png")



class ClickablePicture extends Component {
   
	render() {
       
    return(

    <div> 
        <img onClick
        alt ="maxence" 
        src={maxence1} 
        style={
            {   height: "150px",
                width: "auto",
                border: "solid 2px black",
                margin: "15px"
            }}

        
        />   
    </div>
        
    )
}}
    
  




       
export default ClickablePicture;