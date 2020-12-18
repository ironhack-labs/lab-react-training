import React, { Component } from 'react';
import './CreditCard.css';

export default class CreditCard extends Component {

  numbersFunction(str) {
    const lastDigits = str.slice(str.length-4, str.length);
    return `●●●● ●●●● ●●●● ${lastDigits}`;
  }

  expirationMonthFunction(num) {
    return num < 10 ? `0${num}` : num;  
  }

  expirationYearFunction(num) {
    const str = num.toString();
    return str.slice(str.length-2, str.length);
  }

  render() {
    const { 
      type, 
      number, 
      expirationMonth, 
      expirationYear, 
      bank, 
      owner, 
      bgColor, 
      color
    } = this.props;

    const divStyle = {
      backgroundColor: bgColor,
      color
    }; 

    const month = this.expirationMonthFunction(expirationMonth); 
    const year = this.expirationYearFunction(expirationYear); 

    return (
        <div ClassName="box-card">
            <div className="credit-card" style={divStyle}>
                
                <div className="credit-card-brand">
                {type === "Master Card" && <img src="/img/master-card.svg" alt="Master Card logo" /> }
                {type === "Visa" && <img src="/img/visa.png" alt="Visa logo" /> }
                </div>

                <div className="credit-card-number">
                {this.numbersFunction(number)}
                </div>

                <div className="credit-card-details">
                
                <div>
                    <p>Expires {month}/{year}</p>
                    <p className="bank-logo">{bank}</p>
                </div>
                
                <div>
                    {owner}
                </div>
                
                </div>

            </div>
        </div>
    )
  }
} 