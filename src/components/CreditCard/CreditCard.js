import React, { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {

  hideNumber = (num) => {
    return <div className='CreditCardNumber'> 
      <span className='HideNumbers'>{'.'.repeat(num.number.length - 12)}  </span>
      <span className='HideNumbers'>{'.'.repeat(num.number.length - 12)}  </span>
      <span className='HideNumbers'>{'.'.repeat(num.number.length - 12)}  </span>
      <span>{num.number.substr(num.number.length - 4)}</span>
      </div>  
  }

  expireMonth = (month) => {
    return month.toString().length === 2 ? month : `0${month}`;
  }

  expireYear = (year) => {
    let expireYear = year.toString();
    return expireYear.substring(expireYear.length - 2);
  }


  render() {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;

    return (
      <div className='CreditCard' style={{ 'backgroundColor': `${bgColor}`, 'color': `${color}` }} >
        <div className='CreditCardType'><img style={{'width': '60px'}} src={type ==='Visa' ? '/img/visa.png' : '/img/master-card.svg'} alt="type" /></div>
        {this.hideNumber({number})}
        <div>
          <p className='InfoCard'>Expires {this.expireMonth(expirationMonth)}/{this.expireYear(expirationYear)} <span className='BankName'>{bank}</span></p>
          <span>{owner}</span>
        </div>
      </div>
    )
  }
}

export default CreditCard;