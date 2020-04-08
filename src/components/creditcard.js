import React, { Component } from "react";

class CreditCard extends Component {
  
  cardType = (type) => {
    if (type === "Visa") {
      return '/img/visa.png';
    } else {
      return '/img/master-card.svg';
    }
  }

  cardNumber = (number) => {
    let hideNum = '';
    for (let i = 0; i < (number.length - 4); i++) {
      hideNum += "*";
    } 
    return hideNum + ' ' + number.substring(number.length - 4);
  }

  monthExpire = (num) => {
    if (num.toString().length === 1) {
      return '0'.concat(num);
    } else {
      return num;
    }
  }
  
  yearExpire = (num) => {
    let year = num.toString();
    return year.substring(year.length - 2);
  }

  render () {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;
    return (
      <div className="creditcard-box" style={{'background-color': `${bgColor}`}}>
        <img className="creditcard-img" src={this.cardType(type)} alt=""/>
        <p className="creditcard-num">{this.cardNumber(number)}</p>
        <p>Expires {this.monthExpire(expirationMonth)}/{this.yearExpire(expirationYear)} {bank}</p>
        <p>{owner}</p>
      </div>
    )
  }
}

// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons wink
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card

export default CreditCard;