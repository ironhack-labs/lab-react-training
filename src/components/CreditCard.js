import React, { Component } from 'react';
import './CreditCard.css';
class CreditCard extends Component {
  render() {
    const cssLogo =
      'typeCredirCard' + (this.props.type === 'Visa' ? ' visa' : ' mastercard');
    const styledCreditCard = {
      backgroundColor: this.props.bgColor,
      color: this.props.color,
    };
    const expMonth =
      (this.props.expirationMonth.toString().length === 1 ? '0' : '') +
      this.props.expirationMonth;
    const expYear = this.props.expirationYear.toString().substring(2);
    return (
      <div className="creditCard" style={styledCreditCard}>
        <div className={cssLogo} />
        <div className="numberCreditCard">
          {this.props.number.split('').map((num, index) => {
            if (index < 12) {
              const cssNumber =
                'dotCreditCard' +
                ((index + 1) % 4 === 0 ? ' spaceCreditCard' : '');
              return (
                <span
                  className={cssNumber}
                  style={{ backgroundColor: this.props.color }}
                ></span>
              );
            } else {
              return <span>{num}</span>;
            }
          })}
        </div>
        <div className="dataCreditCard">
          <span>
            Expires {expMonth}/{expYear}
            &nbsp;&nbsp;&nbsp;{this.props.bank}
          </span>
          <span>{this.props.owner}</span>
        </div>
      </div>
    );
  }
}
export default CreditCard;
