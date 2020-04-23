import React, { Component } from "react";
import "../index.css"

class BoxColor extends Component {
	render() {
        const {r,g,b} = this.props;

    return(

    <div className ="box center" 
         style = { 
             {
                VerticalAlign: "center",
                height: "50px",
                border: "solid 2px black",
                backgroundColor: 
                `rgb(${r}, ${g}, ${b})`
                
             }
                 }  > rgb( {r}, {g}, {b}         )

    </div>
    )
                                }}

  
export default BoxColor;