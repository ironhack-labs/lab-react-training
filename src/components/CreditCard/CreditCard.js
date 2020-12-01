import React, { Component } from 'react';
import './CreditCard.css';

export default class CreditCard extends Component {

  hideNumbers(str) {
    const lastDigits = str.slice(str.length-4, str.length);
    return `●●●● ●●●● ●●●● ${lastDigits}`;
  }

  formatExpirationMonth(num) {
    return num < 10 ? `0${num}` : num;  
  }

  formatExpirationYear(num) {
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

    const month = this.formatExpirationMonth(expirationMonth); 
    const year = this.formatExpirationYear(expirationYear); 

    return (
      <div className='credit-card' style={divStyle}>
        <div className='credit-card_brand'>
          {type === 'Master Card' && 
            <img src='/img/master-card.svg' alt='Master Card logo' />
          }
          {type === 'Visa' && 
            <img src='/img/visa.png' alt='Visa logo' />
          }
        </div>
        
        <div className='credit-card_number'>
          {this.hideNumbers(number)}
        </div>

        <div className='credit-card_details'>
          <div>
            <span>Expires {month}/{year}</span>
            <span className='bank'>{bank}</span>
          </div>
          <div>
            {owner}
          </div>
        </div>

      </div>
    )
  }
}