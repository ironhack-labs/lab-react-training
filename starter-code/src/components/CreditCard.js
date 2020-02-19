import React, { Component } from "react";

export default class CreditCard extends Component { 
  render() {
    return (
      <div id="Credit" style={{
          backgroundColor:`${this.props.bgColor}`,
          color:`${this.props.color}`
      }}>
         
        
         <p>{this.props.type === 'Visa' && <img src='/img/visa.png'/>}
         {this.props.type === 'Master Card' && <img src='/img/master-card.svg'/>}</p>
         <div>
             <h1> ●●●● ●●●● ●●●● {this.props.number.substring(12,16)} </h1>
            <div id="fechas">
            <p>Expires {this.props.expirationMonth<10 ? '0':null}{this.props.expirationMonth}/{this.props.expirationYear.toString().substring(2,5)}</p>
            <p id="banco">{this.props.bank}</p>
            </div>
            <p>{this.props.owner}</p>
         </div>
        </div>
    );
  }
}