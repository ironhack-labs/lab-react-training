import React from 'react';

class CreditCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.number = this.props.number;
    this.expirationMonth = this.props.expirationMonth;
    this.expirationYear = this.props.expirationYear;
    this.bank = this.props.bank;
    this.owner = this.props.owner;
    this.bgColor = this.props.bgColor;
    this.color = this.props.color;
    this.cardLogo = './img/master-card.svg';
  }
  setLogo(type) {
    if (type === 'Visa') {
      this.cardLogo = './img/visa.png';
    }
    return this.cardLogo;
  }
  setExpirationMonth = (expirationMonth) => {
    let month = expirationMonth;
    if (month < 10) {
      month = '0' + month;
    }
    return month;
  };

  secretNum = (num) => {
    let count = 1;
    let cardNumber = num.split('');
    for (let i = 0; i <= 11; i++) {
      cardNumber[i] = '·';
      if (count === 4) {
        cardNumber[i] += ' ';
        count = 0;
      }
      count++;
    }
    return cardNumber.join('');
  };
  render() {
    return (
      <div
        className="creditCard"
        style={{ backgroundColor: this.bgColor, color: this.color }}
      >
        <img src={this.setLogo(this.type)} alt="card logo" />
        <p className="cardNumber">{this.secretNum(this.number)}</p>
        <p>{`Expires ${this.setExpirationMonth(this.expirationMonth)}/${
          this.expirationYear - 2000
        }      ${this.bank}`}</p>
        <p>{this.owner}</p>
      </div>
    );
  }
}

export default CreditCardClass;
