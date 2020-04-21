import React, { Component } from "react";

let masterCard = require ("../img/master-card.svg")




class CreditCard2 extends Component {
	render() {
          
    return(

    <div className ="box credit"
         style={  {
             color:            `${this.props.color}`,
             backgroundColor:  `${this.props.bgColor}`,
             marginRight: `15px` 
                  }  
                }>

        <img alt ="visa" src={masterCard}  />     
        <h4>        {this.props.number}          </h4>
        <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}    {this.props.bank} </span>
        <span>        {this.props.owner}           </span>
    </div>
    
        
    )
}}

export default CreditCard2;