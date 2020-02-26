import React, { Component } from 'react';

class CreditCard extends Component {

  render() {
    let picture=null;
    if(this.props.type==="Visa"){
      picture="./img/visa.png";
    }else if(this.props.type==="Master Card"){
      picture="./img/master-card.svg";

    }
    let num=this.props.number;
    num=num.slice(-4)
    let month=`${this.props.expirationMonth}`;
    if(month.length==1){
      month=`0${month}`;
    }
    let yy=`${this.props.expirationYear}`;
    yy=yy.slice(-2);

    return (
      
    <div className="CreditCard" style={{color:this.props.color, backgroundColor: this.props.bgColor}}>
      <div className="logo">
       <img src= {picture} width="35" height="15"></img>
      </div>
      <div className="numbers">
        <p>**** **** **** {num}</p>
      </div>
      <div className="expire">
        <p>Expires {month}/{yy} {this.props.bank}</p>
      </div>
      <div className="owner">
        <p> {this.props.owner}</p>
      </div>
    </div>

);

  }
}

export default CreditCard;
