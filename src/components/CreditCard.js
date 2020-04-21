import React, { Component } from "react";

let visa = require ("../img/visa.png")




class CreditCard extends Component {
	render() {
          
    return(

    <div className ="box credit"
         style={  {
             color:            `${this.props.color}`,
             backgroundColor:  `${this.props.bgColor}`,
             marginRight: `15px` 
                  }  
                }>

        <img alt ="visa" src={visa}  />     
        <h4>        {this.props.number}          </h4>
        <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}    {this.props.bank} </span>
        <span>        {this.props.owner}           </span>
    </div>
    
        
    )
}}


export default CreditCard;