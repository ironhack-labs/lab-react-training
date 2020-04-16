import React, { Component } from "react";

class Random extends Component {

	render() {
        const {min, max} = this.props

    return(

    <div className ="box">
        <p>
            Random value between {this.props.min} and  {this.props.max} => {Math.floor(Math.random() * (max-min) + 1) }
        </p>
    </div>
        
    )
}}
    
  




       
export default Random;