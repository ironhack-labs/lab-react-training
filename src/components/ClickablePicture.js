import React, { Component } from "react";

let maxence1 = require ("../img/persons/maxence.png")
let glasses = require("../img/persons/maxence-glasses.png")



class ClickablePicture extends React.Component {

    constructor(props) {super(props);
      this.state = { pic: true    };
      this.toggleVisibility = this.toggleVisibility.bind(this)}
  
      toggleVisibility() {   
          this.setState( (state)=>{  
              if (state.pic === true) {return {pic: false}       }
              else {return {pic: true}   }} )}
  
    render() {
      if (this.state.pic) { return (
          <div>
            <img onClick={this.toggleVisibility}
                 src= {maxence1}    
                 className="clicPic"
                 style= {  {width: "150px"}}
                 >
          	</img>
          </div>);}
   
      else { return (
        <div>
        <img onClick={this.toggleVisibility}
             src= {glasses}    
             className="clicPic"
             style= {  {width: "150px"}}
             
             >
        </img>
        </div>
        );}}};
    

       
export default ClickablePicture;